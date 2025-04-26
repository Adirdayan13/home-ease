import { useState } from 'react';
import { myVeryLimitedAccessKey } from '../utils';
import { useParams } from 'react-router-dom';

// Quelle - homepage
// Status - kunde
// Merkmale - Kunde: Kaufinteressent
// keep_data_till - one year
// gdpr_status - 3
// Kontakterlaubnis erteilt - On

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { id, title } = useParams(); // Extracts "id" from URL
  const submit = async (values) => {
    let client_id;
    setIsLoading(true);
    setIsError(null);
    const today = new Date();
    const nextYear = new Date(today);
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    try {
      // Create Contact
      await fetch('https://api.propstack.de/v1/contacts', {
        headers: {
          'X-API-KEY': myVeryLimitedAccessKey,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          client: {
            ...values,
            item_id: id,
            accept_contact: true,
            created_at: today,
            keep_data_till: nextYear,
            gdpr_status: 0, // DSGVO-Status = Keine Angabe
            client_reason_id: 116586, // Speichern-bis-Grund = 1 Jahr
            client_source_id: 211813, // Quelle = Homepage
            client_status_id: 215837, // Status = Kunde
            group_ids: [410460], // Merkmale = Kunde: Kaufinteressent
          },
        }),
      })
        .then((res) => res.json())
        .then(async (res) => {
          client_id = res.id;
          if (res?.errors) {
            throw new Error(res.errors[0]);
          }
          // Create task
          await fetch('https://api.propstack.de/v1/tasks', {
            headers: {
              'X-API-KEY': myVeryLimitedAccessKey,
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
              task: {
                body: `
                <p>Salutation: ${values.salutation}</p>
                <p>First name: ${values.first_name}</p>
                <p>Last name: ${values.last_name}</p>
                <p>Phone: ${values.home_cell}</p>
                <p>E-mail: ${values.email}</p>
                <p>Street: ${values.home_street}</p>
                <p>Zip code: ${values.home_zip_code}</p>
                <p>City: ${values.home_city}</p>
                <p>Message: ${values.message}</p>`,
                title: title,
                property_ids: [id],
                client_ids: [res.id],
                is_reminder: true,
              },
            }),
          })
            .then((res) => res.json())
            .then(async (res) => {
              if (res?.errors) {
                throw new Error(res.errors[0]);
              }
              // Create a deal (make it qualified)
              await fetch('https://api.propstack.de/v1/client_properties', {
                headers: {
                  'X-API-KEY': myVeryLimitedAccessKey,
                  'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                  client_property: {
                    client_id, // ID from contact creation
                    title: `${values.first_name} ${values.last_name} - Anfrage`,
                    property_id: [id], // Optional, if linked to a property
                    deal_stage_id: 280132, // You need to find this ID in your Propstack pipeline
                  }
                })
              }).then((res) => res.json())
                .then((res) => {
                  if (res?.errors) {
                    throw new Error(res.errors[0]);
                  }
                  setIsLoading(false);
                  setIsSubmitted(true);
                })
                .catch((error) => {
                  setIsError(error);
                  setIsLoading(false);
                  setIsSubmitted(false);
                  console.error('Error:', error);
                });
            })
            
        });
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
      setIsSubmitted(false);
      console.error('Error:', error);
    }
  };
  return { isLoading, isError, submit, isSubmitted };
};

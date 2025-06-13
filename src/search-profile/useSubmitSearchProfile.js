import { useState } from 'react';
import { myVeryLimitedAccessKey } from '../utils';

export const useSubmitSearchProfile = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState('');
  const [selectedRegions, setSelectedRegions] = useState([]);

  const submit = async (values) => {
    let extendedValues = {
      ...values,
      regions: selectedRegions,
      cities: cities,
      rs_types: [values.rs_types],
    };

    setIsLoading(true);
    try {
      await fetch('https://api.propstack.de/v1/contacts', {
        headers: {
          'X-API-KEY': myVeryLimitedAccessKey,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          client: {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone: values.phone,
          },
        }),
      })
        .then((res) => res.json())
        .then(async (res) => {
          if (res.errors) {
            throw new Error(res.errors[0]);
          }
          extendedValues.client_id = res.id;
          await fetch('https://api.propstack.de/v1/saved_queries', {
            headers: {
              'X-API-KEY': myVeryLimitedAccessKey,
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
              saved_query: {
                ...extendedValues,
              },
            }),
          });
        });

      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
      console.error('Error:', error);
    }
  };
  return {
    isLoading,
    isError,
    isSubmitted,
    cities,
    input,
    selectedRegions,
    setInput,
    submit,
    setSelectedRegions,
    setCities
  };
};

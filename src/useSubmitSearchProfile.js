import { useState } from 'react';
import { myVeryLimitedAccessKey } from './utils';

const germanRegions = [
  'Baden-Württemberg',
  'Bayern',
  'Berlin',
  'Brandenburg',
  'Bremen',
  'Hamburg',
  'Hessen',
  'Mecklenburg-Vorpommern',
  'Niedersachsen',
  'Nordrhein-Westfalen',
  'Rheinland-Pfalz',
  'Saarland',
  'Sachsen',
  'Sachsen-Anhalt',
  'Schleswig-Holstein',
  'Thüringen',
];

export const useSubmitSearchProfile = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const addCity = (city) => {
    if (city && !cities.includes(city)) {
      setCities([...cities, city]);
      setInput(''); // Clear input after adding
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addCity(input.trim());
    }
  };

  const removeCity = (index) => {
    setCities(cities.filter((_, i) => i !== index));
  };

  const submit = async (values) => {
    let extendedValues = {
      ...values,
      regions: selectedRegion,
      cities: cities,
      rs_types: [values.rs_types],
    };
    if (extendedValues.marketing_type === 'RENT') {
      extendedValues.base_rent = values.price;
      extendedValues.base_rent_to = values.price_to;
      delete extendedValues.price;
      delete extendedValues.price_to;
    }

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
          console.log('adir data', res);
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
    selectedRegion,
    germanRegions,
    addCity,
    handleKeyDown,
    removeCity,
    setInput,
    submit,
    setSelectedRegion,
  };
};

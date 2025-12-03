import { myVeryLimitedAccessKey } from '../utils';

export const assertOk = (res) => {
	console.log('API Response:', res);
  if (res.ok) return res;
  throw new Error('API response is not OK.', { cause: res });
};

export const takeData = (res) =>
  res.json().catch((err) => {
    throw new Error('API response error: cannot take data.', {
      cause: { err, res },
    });
  });

export const fetchData = async (url, body = {}) =>
  await fetch(url, {
		headers: {
			'X-API-KEY': myVeryLimitedAccessKey,
      'Content-Type': 'application/json',
    },
    method: 'POST',
		body: JSON.stringify(body),
  })
    .then(assertOk)
    .then(takeData);

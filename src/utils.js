export const fetcher = (url) => fetch(url, {
	headers: { 'X-API-KEY': '' },
}).then((response) => response.json());
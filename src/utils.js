export const fetcher = (url) => fetch(url, {
	headers: { 'X-API-KEY': '3OvpePa234ctjeIuPIqo7T8fTTCfBOgm8JDpCsDm' },
}).then((response) => response.json());

export const translate = (val) => {
	if (val === 'BUY') return 'Kauf'
	return null;
}

export const formatToCurrency = (amount) =>  amount ? "€ " + new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(amount) : null;
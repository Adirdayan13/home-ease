export const myVeryLimitedAccessKey = process.env.REACT_APP_PSTACK;
export const templateId = process.env.REACT_APP_TEMPLATE_ID;
export const serviceId = process.env.REACT_APP_SERVICE_ID;
export const userId = process.env.REACT_APP_USER_ID;

export const fetcher = (url) => fetch(url, {
	headers: { 'X-API-KEY': myVeryLimitedAccessKey },
}).then((response) => response.json());

export const translate = (val) => {
	if (val === 'BUY') return 'Kauf'
	if (val === 'RENT') return 'Miete'
	if (val === 'APARTMENT') return 'Wohnung';
	if (val === 'HOUSE') return 'Haus';
	if (val === 'TRADE_SITE') return 'Grundstück';
	if (val === 'GARAGE') return 'Garage';
	if (val === 'SHORT_TERM_ACCOMMODATION') return 'Kurzzeitunterkunft';
	if (val === 'OFFICE') return 'Büro';
	if (val === 'GASTRONOMY') return 'Gastronomie';
	if (val === 'INDUSTRY') return 'Industrie';
	if (val === 'STORE') return 'Geschäft';
	if (val === 'SPECIAL_PURPOSE') return 'Spezial Zweck';
	return null;
}

export const formatToCurrency = (amount, includeEuroSign) => (
	!isNaN(parseFloat(amount)) && isFinite(amount))
		? `${includeEuroSign ? '€ ' : ''} ${new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(amount)}`
		: null;
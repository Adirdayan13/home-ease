export const fetcher = (url) => fetch(url, {
	headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY },
}).then((response) => response.json());

export const translate = (val) => {
	if (val === 'BUY') return 'Kauf'
	return null;
}

export const formatToCurrency = (amount) =>  amount ? "€ " + new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(amount) : null;

export const alignChildren = (children) => (
	<div className="vh-100 w-100 d-flex align-items-center justify-content-center">
		{children}
	</div>
);
import { Container } from "react-bootstrap";

const Contact = () => {
	return (
		<div
			style={{
				marginTop: 80,
				background: 'var(--home-ease-dark)',
				minHeight: '100vh',
				paddingTop: 80
			}}
		>
			<Container>
				<h1 style={{ color: 'var(--home-ease-yellow)' }}>Kontakt aufnehmen</h1>
				<h2 style={{ color: 'var(--home-ease-white)', margin: '32px 0' }}>
					Ihre Anfrage zu Objekt , Familienparadies in Mahlsdorf Süd: 5-Zimmer-Haus mit Pool und separatem Gästehaus
				</h2>
			</Container>
		</div>
	)
};

export default Contact;

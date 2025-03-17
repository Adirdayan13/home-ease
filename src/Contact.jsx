import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import portrait from './HomeEase-Portrait-Ilan.png';

// Quelle - homepage
// Status - kunde
// Merkmale - Kunde: Kaufinteressent
// keep_data_till - one year
// gdpr_status - 3
// Kontakterlaubnis erteilt - On

const validationSchema = Yup.object({
  first_name: Yup.string().required('Vorname ist erforderlich'),
  last_name: Yup.string().required('Nachname ist erforderlich'),
  phone: Yup.string()
    .matches(/^\d+$/, 'Nur Zahlen erlaubt')
    .required('Telefonnummer ist erforderlich'),
  email: Yup.string()
    .email('Ungültige E-Mail-Adresse')
    .required('E-Mail ist erforderlich'),
  body: Yup.string().required('Nachricht darf nicht leer sein'),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { id, title } = useParams(); // Extracts "id" from URL

  return (
    <div
      className="he-dark-b"
      style={{
        marginTop: 80,
        paddingTop: 80,
        minHeight: '100vh'
      }}
    >
      <Container>
        <h1 className="he-yellow-c">Kontakt aufnehmen</h1>
        <h3 className="he-white-c" style={{ margin: '32px 0' }}>
          Ihre Anfrage zu Objekt , Familienparadies in Mahlsdorf Süd:
          5-Zimmer-Haus mit Pool und separatem Gästehaus
        </h3>
        {isSubmitted ? (
          <h2 className="he-white-c">
            Vielen Dank, Ihre Anfrage wurde erfolgreich abgeschickt! Wir werden
            uns in Kürze bei Ihnen melden.
          </h2>
        ) : (
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              phone: '',
              email: '',
              body: 'Ich bin an dieser Immobilie interessiert. Bitte kontaktieren Sie mich.',
            }}
            validateOnBlur={true}
            validateOnChange={true}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              setIsLoading(true);
              setIsError(null);
              const today = new Date();
              const nextYear = new Date(today);
              nextYear.setFullYear(nextYear.getFullYear() + 1);
              try {
                // Create Contact
                await fetch('https://api.propstack.de/v1/contacts', {
                  headers: {
                    'X-API-KEY': process.env.REACT_APP_API_KEY,
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
                      group_ids: [410460] // Merkmale = Kunde: Kaufinteressent
                    },
                  }),
                })
                  .then((res) => res.json())
                  .then(async (res) => {
                    if (res.errors) {
                      throw new Error(res.errors[0]);
                    }
                    // Create task
                    await fetch('https://api.propstack.de/v1/tasks', {
                      headers: {
                        'X-API-KEY': process.env.REACT_APP_API_KEY,
                        'Content-Type': 'application/json',
                      },
                      method: 'POST',
                      body: JSON.stringify({
                        task: {
                          title: title,
                          property_ids: [id],
                          client_ids: [res.id],
                          is_reminder: true,
                        },
                      }),
                    })
                      .then((res) => res.json())
                      .then((res) => {
                        if (res.errors) {
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
                  });
              } catch (error) {
                setIsError(error);
                setIsLoading(false);
                setIsSubmitted(false);
                console.error('Error:', error);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="he-white-c">
                <Row>
                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <h3>Vor-& Nachname*</h3>
                    </Col>

                    <Col xs={12} md={8}>
                      <Row>
                        <Col xs={12} md={6}>
                          <ErrorMessage
                            name="first_name"
                            component="div"
                            style={{ color: 'red' }}
                          />
                          <Field
                            id="first_name"
                            name="first_name"
                            placeholder="Vorname"
                            className="contact-input"
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <ErrorMessage
                            name="last_name"
                            component="div"
                            style={{ color: 'red' }}
                          />
                          <Field
                            id="last_name"
                            name="last_name"
                            placeholder="Nachname"
                            className="contact-input"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>Telefonnr.*</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        style={{ color: 'red' }}
                      />
                      <Field
                        id="phone"
                        name="phone"
                        type="number"
                        className="no-spinner contact-input"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>E-mail*</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: 'red' }}
                      />
                      <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        className="contact-input"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>Ihre Nachricht</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <Field
                        id="body"
                        name="body"
                        as="textarea"
                        className="contact-input"
                      />
                    </Col>
                  </Row>
                </Row>
                <h4 className="he-white-c">
                  Datenschutzinformation Mit der Eingabe meiner Daten und
                  Absendung der Anfrage erkläre ich mich damit einverstanden,
                  dass die Daten verschlüsselt an HomeEase GmbH weitergeleitet
                  werden. Weitere Informationen erfahren Sie unter Datenschutz
                  Verbraucher im Sinne des § 13 BGB geben uns mit der
                  Übermittlung ihrer Telefonnummer die ausdrückliche
                  Einverständniserklärung zur telefonischen Kontaktaufnahme.
                </h4>

                {isError && (
                  <h3 className="mt-3 text-center he-yellow-c">
                    Error has accured, please try again later.
                  </h3>
                )}
                <button
                  className="he-teal-b he-white-c mt-3"
                  style={{
                    minWidth: 75,
                    padding: '16px 24px',
                    borderRadius: 32,
                    border: 'none',
                    outline: 'none',
                  }}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <h3 className="m-0">Submit</h3>
                  )}
                </button>
              </Form>
            )}
          </Formik>
        )}
        <Row className="d-flex gap-3 mt-5 pb-3">
          <Col
            xs={12}
            lg={4}
            className="d-flex justify-content-center justify-content-lg-start"
          >
            <img
              src={portrait}
              alt="portrait"
              style={{ height: 250, objectFit: 'contain' }}
            />
          </Col>
          <Col
            xs={12}
            lg={3}
            className="d-flex flex-column align-items-center align-items-lg-start gap-2"
          >
            <h1 className="he-yellow-c">Kontakt</h1>
            <h3 className="he-white-c">Ilan Fishman</h3>
            <h3 className="he-white-c">Geschäftsführer</h3>
            <a style={{ textDecoration: 'none' }} href="tel:+4917622024779">
              <h3 className="he-white-c">+49 176 2022 4779</h3>
            </a>
            <a
              style={{ textDecoration: 'none' }}
              href="mailto:ilan@homeease.de"
            >
              <h3 className="he-white-c">ilan@homeease.de</h3>
            </a>
          </Col>
          <Col
            xs={12}
            lg={3}
            className="d-flex flex-column align-items-center align-items-lg-start  gap-2"
          >
            <h1 className="he-yellow-c">Anschrift</h1>
            <h3 className="he-white-c">HomeEase GmbH</h3>
            <h3 className="he-white-c">Grellstraße 11c</h3>
            <h3 className="he-white-c">10409 Berlin</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

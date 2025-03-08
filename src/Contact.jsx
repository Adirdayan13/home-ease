import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstname: Yup.string().required('Vorname ist erforderlich'),
  lastname: Yup.string().required('Nachname ist erforderlich'),
  phone: Yup.string()
    .matches(/^\d+$/, 'Nur Zahlen erlaubt')
    .required('Telefonnummer ist erforderlich'),
  email: Yup.string()
    .email('Ungültige E-Mail-Adresse')
    .required('E-Mail ist erforderlich'),
  message: Yup.string().required('Nachricht darf nicht leer sein'),
});

const Contact = () => {
  return (
    <div
      style={{
        marginTop: 80,
        background: 'var(--home-ease-dark)',
        minHeight: '100vh',
        paddingTop: 80,
      }}
    >
      <Container>
        <h1 style={{ color: 'var(--home-ease-yellow)' }}>Kontakt aufnehmen</h1>
        <h2 style={{ color: 'var(--home-ease-white)', margin: '32px 0' }}>
          Ihre Anfrage zu Objekt , Familienparadies in Mahlsdorf Süd:
          5-Zimmer-Haus mit Pool und separatem Gästehaus
        </h2>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            message:
              'Ich bin an dieser Immobilie interessiert. Bitte kontaktieren Sie mich.',
          }}
          validateOnBlur={true}
          validateOnChange={true}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            console.log('Form submitted!', values);
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ color: 'var(--home-ease-white)' }}>
              <Row>
                <Row>
                  <Col xs={12} md={4}>
                    <h3>Vor-& Nachname*</h3>
                  </Col>

                  <Col xs={12} md={8}>
                    <Row>
                      <Col xs={12} md={6}>
                        <ErrorMessage
                          name="firstname"
                          component="div"
                          style={{ color: 'red' }}
                        />
                        <Field
                          id="firstname"
                          name="firstname"
                          placeholder="Vorname"
                          className="contact-input"
                        />
                      </Col>
                      <Col xs={12} md={6}>
                        <ErrorMessage
                          name="lastname"
                          component="div"
                          style={{ color: 'red' }}
                        />
                        <Field
                          id="lastname"
                          name="lastname"
                          placeholder="Nachname"
                          className="contact-input"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
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

                <Row>
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

                <Row>
                  <Col xs={12} md={4}>
                    <Col xs={12}>
                      <h3>Ihre Nachricht</h3>
                    </Col>
                  </Col>
                  <Col xs={12} md={8}>
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      className="contact-input"
                      valuedefaultValue=""
                    />
                  </Col>
                </Row>
              </Row>
              <h4 style={{ color: 'var(--home-ease-white)' }}>
                Datenschutzinformation Mit der Eingabe meiner Daten und
                Absendung der Anfrage erkläre ich mich damit einverstanden, dass
                die Daten verschlüsselt an HomeEase GmbH weitergeleitet werden.
                Weitere Informationen erfahren Sie unter Datenschutz Verbraucher
                im Sinne des § 13 BGB geben uns mit der Übermittlung ihrer
                Telefonnummer die ausdrückliche Einverständniserklärung zur
                telefonischen Kontaktaufnahme.
              </h4>
              {/* {Object.keys(errors).map((key) =>
              touched[key] ? <div key={key} style={{ color: "red" }}>{errors[key]}</div> : null
            )} */}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Contact;

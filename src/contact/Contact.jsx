import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Col, Container, Row, Form as FormBootstrap } from 'react-bootstrap';
import * as Yup from 'yup';
import { useSubmit } from './useSubmit';
import { useParams } from 'react-router-dom';

const validationSchema = Yup.object({
  first_name: Yup.string().required('Vorname ist erforderlich'),
  last_name: Yup.string().required('Nachname ist erforderlich'),
  home_cell: Yup.string()
    .matches(/^\d+$/, 'Nur Zahlen erlaubt')
    .required('Telefonnummer ist erforderlich'),
  email: Yup.string()
    .email('Ungültige E-Mail-Adresse')
    .required('E-Mail ist erforderlich'),
  message: Yup.string().required('Nachricht darf nicht leer sein'),
});

const Contact = ({ data }) => {
  const { title } = useParams();
  const { isLoading, isError, isSubmitted, submit } = useSubmit();

  return (
    <div
      className="he-dark-b"
      style={{
        marginTop: 80,
        paddingTop: 80,
        minHeight: '100vh',
      }}
    >
      <Container>
        <h1 className="he-yellow-c">Kontakt aufnehmen</h1>
        <h3 className="he-white-c" style={{ margin: '32px 0' }}>
          Ihre Anfrage zu Objekt , {title}
        </h3>
        {isSubmitted ? (
          <h2 className="he-white-c">
            Vielen Dank, Ihre Anfrage wurde erfolgreich abgeschickt! Wir werden
            uns in Kürze bei Ihnen melden.
          </h2>
        ) : (
          <Formik
            initialValues={{
              salutation: 'mr',
              first_name: '',
              last_name: '',
              home_cell: '',
              email: '',
              home_street: '',
              home_house_number: '',
              home_zip_code: '',
              home_city: '',
              message:'Ich bin an dieser Immobilie interessiert. Bitte kontaktieren Sie mich.'
            }}
            validateOnBlur={true}
            validateOnChange={true}
            validationSchema={validationSchema}
            onSubmit={async (values) => submit(values)}
          >
            {({ errors, touched, handleChange }) => (
              <Form className="he-white-c">
                <Row>
                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>Anrede*</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <ErrorMessage
                        name="salutation"
                        component="div"
                        style={{ color: 'red' }}
                      />
                      <FormBootstrap.Select
                        aria-label="salutation"
                        name="salutation" // Add name attribute
                        className="contact-input"
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--home-ease-light)',
                        }}
                        onChange={handleChange}
                      >
                        <option value="mr">Herr</option>
                        <option value="ms">Frau</option>
                      </FormBootstrap.Select>
                    </Col>
                  </Row>
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
                        name="home_cell"
                        component="div"
                        style={{ color: 'red' }}
                      />
                      <Field
                        id="home_cell"
                        name="home_cell"
                        type="number"
                        className="no-spinner contact-input"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>E-Mail*</h3>
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
                      <h3>Straße & Nr</h3>
                    </Col>
                    <Col xs={12} md={8}>
                      <Row>
                        <Col xs={12} md={6}>
                          <Field
                            id="home_street"
                            name="home_street"
                            placeholder="Straße"
                            className="contact-input"
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Field
                            id="home_house_number"
                            name="home_house_number"
                            placeholder="Nr"
                            type="number"
                            className="no-spinner contact-input"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>Postleitzahl</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <Field
                        id="home_zip_code"
                        name="home_zip_code"
                        type="number"
                        className="no-spinner contact-input"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>Stadt</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <Field
                        id="home_city"
                        name="home_city"
                        type="home_city"
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
                        id="message"
                        name="message"
                        as="textarea"
                        className="contact-input"
                      />
                    </Col>
                  </Row>
                </Row>
                <h4 className="he-white-c">Datenschutzinformation</h4>
                <h4 className="he-white-c">
                  Mit der Eingabe meiner Daten und Absendung der Anfrage erkläre
                  ich mich damit einverstanden, dass die Daten verschlüsselt an
                  HomeEase GmbH weitergeleitet werden. Weitere Informationen erfahren Sie unter Datenschutz.
                </h4>
                <h4 className="he-white-c">
                  Verbraucher im Sinne des § 13 BGB geben uns mit der
                  Übermittlung ihrer Telefonnummer die ausdrückliche
                  Einverständniserklärung zur telefonischen Kontaktaufnahme.
                </h4>

                {isError && (
                  <h3 className="mt-3 text-center he-yellow-c">
                    Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie
                    es erneut.
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
          {data?.broker?.avatar && (
            <Col
              xs={12}
              lg={4}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <img
                src={data?.broker?.avatar}
                alt="portrait"
                style={{ height: 250, objectFit: 'contain' }}
              />
            </Col>
          )}
          <Col
            xs={12}
            lg={3}
            className="d-flex flex-column align-items-center align-items-lg-start gap-2"
          >
            <h1 className="he-yellow-c">Kontakt</h1>
            <h3 className="he-white-c">{data?.broker?.name}</h3>
            <h3 className="he-white-c">{data?.broker?.position}</h3>
            <a style={{ textDecoration: 'none' }} href={`tel:${data?.broker?.public_cell}`}>
              <h3 className="he-white-c">{data?.broker?.public_cell}</h3>
            </a>
            <a
              style={{ textDecoration: 'none' }}
              href={`mailto:${data?.broker?.public_email}`}
            >
              <h3 className="he-white-c">{data?.broker?.public_email}</h3>
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

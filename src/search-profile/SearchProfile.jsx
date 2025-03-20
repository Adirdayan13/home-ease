import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  Col,
  Container,
  Row,
  Form as FormBootstrap,
  Badge,
} from 'react-bootstrap';
import * as Yup from 'yup';
import { useSubmitSearchProfile } from './useSubmitSearchProfile';

const validationSchema = Yup.object({
  first_name: Yup.string().required('Vorname ist erforderlich'),
  last_name: Yup.string().required('Nachname ist erforderlich'),
  phone: Yup.string()
    .matches(/^\d+$/, 'Nur Zahlen erlaubt')
    .required('Telefonnummer ist erforderlich'),
  email: Yup.string()
    .email('Ungültige E-Mail-Adresse')
    .required('E-Mail ist erforderlich'),
});

const SearchProfile = () => {
  const {
    isSubmitted,
    isLoading,
    isError,
    cities,
    input,
    selectedRegion,
    submit,
    setInput,
    setSelectedRegion,
    addCity,
    handleKeyDown,
    removeCity,
    germanRegions,
  } = useSubmitSearchProfile();

  return (
    <div className="he-dark-b" style={{ paddingTop: 40, minHeight: '100vh' }}>
      <Container>
        <h1 className="he-yellow-c">Suchprofil anlegen.</h1>
        <h1 className="he-yellow-c mb-4">Traumimmobilie finden.</h1>
        {isSubmitted ? (
          <h2 className="he-white-c">
            Vielen Dank, Ihre Anfrage wurde erfolgreich abgeschickt!
          </h2>
        ) : (
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              phone: '',
              email: '',
              marketing_type: 'BUY',
              rs_types: '',
              price: '',
              price_to: '',
              number_of_rooms: '',
              number_of_rooms_to: '',
              note: '',
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
                    <Col xs={12}>
                      <h1 className="he-teal-c mb-4">Ihre Suchkriterien</h1>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>Kaufen oder Mieten</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <FormBootstrap.Select
                        aria-label="marketing_type"
                        name="marketing_type" // Add name attribute
                        className="contact-input"
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--home-ease-light)',
                        }}
                        onChange={handleChange}
                      >
                        <option value="BUY">Kaufen</option>
                        <option value="RENT">Mieten</option>
                      </FormBootstrap.Select>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <Col xs={12}>
                        <h3>Objekt</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <FormBootstrap.Select
                        aria-label="rs_types"
                        name="rs_types" // Add name attribute
                        className="contact-input"
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--home-ease-light)',
                        }}
                        onChange={handleChange} // Add onChange handler
                      >
                        <option value="APARTMENT">Wohnung</option>
                        <option value="HOUSE">Haus</option>
                        <option value="TRADE_SITE">Gewerbegrundstück</option>
                        <option value="GARAGE">Garage</option>
                        <option value="SHORT_TERM_ACCOMODATION">
                          Kurzzeitunterkunft
                        </option>
                        <option value="OFFICE">Büro</option>
                        <option value="GASTRONOMY">Gastronomie</option>
                        <option value="INDUSTRY">Industrie</option>
                        <option value="STORE">Geschäft</option>
                        <option value="SPECIAL_PURPOSE">
                          Spezieller Zweck
                        </option>
                        <option value="INVESTMENT">Investieren</option>
                      </FormBootstrap.Select>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <h3>Ort</h3>
                    </Col>

                    <Col xs={12} md={8}>
                      <Row>
                        <Col xs={12} md={6}>
                          <FormBootstrap.Group controlId="cities">
                            <FormBootstrap.Control
                              type="text"
                              placeholder="Stadt"
                              className="contact-input"
                              name="cities"
                              style={{
                                backgroundColor: 'transparent',
                                color: 'var(--home-ease-light)',
                              }}
                              value={input}
                              onChange={(e) => setInput(e.target.value)}
                              onKeyDown={handleKeyDown}
                              onBlur={() => addCity(input.trim())}
                              autoComplete="off"
                            />
                            <div>
                              {cities.map((city, index) => (
                                <Badge
                                  key={index}
                                  className="me-1 mb-3 he-yellow-b he-dark-c"
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => removeCity(index)}
                                >
                                  {city} ✕
                                </Badge>
                              ))}
                            </div>
                          </FormBootstrap.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <FormBootstrap.Group controlId="region">
                            <FormBootstrap.Select
                              value={selectedRegion}
                              onChange={(e) => {
                                setSelectedRegion(e.target.value);
                                handleChange(e); // Add onChange handler
                              }}
                              name="region"
                              className="contact-input"
                              style={{
                                backgroundColor: 'transparent',
                                color: 'var(--home-ease-light)',
                              }}
                            >
                              <option value="" disabled>
                                Region
                              </option>
                              {germanRegions.map((region, index) => (
                                <option key={index} value={region}>
                                  {region}
                                </option>
                              ))}
                            </FormBootstrap.Select>
                          </FormBootstrap.Group>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mb-1 mt-2">
                    <Col xs={12} md={4}>
                      <h3>Preis</h3>
                    </Col>

                    <Col xs={12} md={8}>
                      <Row>
                        <Col xs={12} md={6}>
                          <Field
                            id="price"
                            name="price"
                            placeholder="Von"
                            type="number"
                            className="no-spinner contact-input"
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Field
                            id="price_to"
                            name="price_to"
                            placeholder="Bis"
                            type="number"
                            className="no-spinner contact-input"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mb-1">
                    <Col xs={12} md={4}>
                      <h3>Zimmer</h3>
                    </Col>

                    <Col xs={12} md={8}>
                      <Row>
                        <Col xs={12} md={6}>
                          <Field
                            id="number_of_rooms"
                            name="number_of_rooms"
                            placeholder="Von"
                            type="number"
                            className="no-spinner contact-input"
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Field
                            id="number_of_rooms_to"
                            name="number_of_rooms_to"
                            placeholder="Bis"
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
                        <h3>Notiz</h3>
                      </Col>
                    </Col>
                    <Col xs={12} md={8}>
                      <Field
                        id="note"
                        name="note"
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
                  type="submit" // Ensure button type is submit
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
      </Container>
    </div>
  );
};

export default SearchProfile;

/*
salutation=
&first_name=asd
&last_name=asd
&email=asd%40asd.com
&phone=asd
&marketing_type=BUY
&rs_types=APARTMENT
&cities%5B%5D=stadt
&regions%5B%5D=Berlin
&price=0
&price_to=100
&number_of_rooms=1
&number_of_rooms_to=5
&features%5B%5D=lift
&note=msg
&acceptance_7a7efd1=Akzeptiert
&post_id=1775
&widget_id=209450c
*/

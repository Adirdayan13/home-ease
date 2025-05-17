import { useEffect, useState } from 'react';
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
import CategoryCheckboxes from './CategoryCheckboxes';
import { germanRegions, rsTypeToCategories } from './utils';

const validationSchema = Yup.object({
  first_name: Yup.string().required('Vorname ist erforderlich'),
  last_name: Yup.string().required('Nachname ist erforderlich'),
  cities: Yup.string().required('Stadt ist erforderlich'),
  rs_types: Yup.string().required('Objekt ist erforderlich'),
  phone: Yup.string().matches(/^\d+$/, 'Nur Zahlen erlaubt'),
  email: Yup.string()
    .email('Ungültige E-Mail-Adresse')
    .required('E-Mail ist erforderlich'),
  price: Yup.number().required('Preis von ist erforderlich'),
  price_to: Yup.string().required('Preis bis ist erforderlich'),
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
    setCities,
  } = useSubmitSearchProfile();

  const [selectedRsType, setSelectedRsType] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(
    rsTypeToCategories['Wohnung'].map((item) => item.value)
  );

  useEffect(() => {
    // reset categories when rs_type changes
    setSelectedCategories(
      rsTypeToCategories[selectedRsType]?.map((item) => item.value) || []
    );
  }, [selectedRsType]);

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
              cities: '',
              price: '',
              price_to: '',
              number_of_rooms: '',
              number_of_rooms_to: '',
              note: '',
            }}
            validateOnBlur={true}
            validateOnChange={true}
            validationSchema={validationSchema}
            // onSubmit={async (values) => submit(values)}
            onSubmit={(values) => console.log({ values })}
          >
            {({ errors, touched, handleChange, setFieldValue, values }) => {
              const addCityAndUpdateFormik = (city) => {
                const trimmed = city.trim();
                if (trimmed && !cities.includes(trimmed)) {
                  const updated = [...cities, trimmed];
                  setCities(updated);
                  setInput('');
                  setFieldValue('cities', updated.join(', ')); // 👈 Sync with Formik
                }
              };

              const removeCityAndUpdateFormik = (index) => {
                const updated = cities.filter((_, i) => i !== index);
                setCities(updated);
                setFieldValue('cities', updated.join(', ')); // 👈 Sync with Formik
              };
              return (
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
                          <h3>Objekt</h3>
                        </Col>
                      </Col>
                      <Col xs={12} md={8}>
                        <ErrorMessage
                          name="rs_types"
                          component="div"
                          style={{ color: 'red' }}
                        />
                        <FormBootstrap.Select
                          aria-label="rs_types"
                          name="rs_types"
                          className="contact-input"
                          style={{
                            backgroundColor: 'transparent',
                            color: 'var(--home-ease-light)',
                          }}
                          value={selectedRsType}
                          onChange={(e) => {
                            const newRsType = e.target.value;
                            setSelectedRsType(newRsType); // Update local state
                            setFieldValue('rs_types', newRsType); // Update Formik value
                          }}
                        >
                          <option value=""></option>
                          <option value="Wohnung">Wohnung</option>
                          <option value="Haus">Haus</option>
                          <option value="Garage">Garage</option>
                          <option value="Büro">Büro/Praxis</option>
                          <option value="Gastronomie/Hotels">
                            Gastronomie/Hotels
                          </option>
                          <option value="Industrie">Industrie</option>
                          <option value="Einzelhandel">Geschäft</option>
                          <option value="SPECIAL_PURPOSE">
                            Spezieller Zweck
                          </option>
                          <option value="INVESTMENT">Investieren</option>
                        </FormBootstrap.Select>
                        {/* <option value="TRADE_SITE">Gewerbegrundstück</option>
                          <option value="SHORT_TERM_ACCOMODATION">Kurzzeitunterkunft</option> */}
                      </Col>
                    </Row>
                    {selectedRsType && (
                      <Row className="mb-1">
                        <Col xs={12} md={4}>
                          <Col xs={12}>
                            <h3>ObjektType</h3>
                          </Col>
                        </Col>
                        <Col xs={12} md={8}>
                          <CategoryCheckboxes
                            selectedRsType={selectedRsType}
                            selectedCategories={selectedCategories}
                            onChange={setSelectedCategories}
                          />
                        </Col>
                      </Row>
                    )}

                    <Row className="mb-1">
                      <Col xs={12} md={4}>
                        <h3>Ort</h3>
                      </Col>
                      <Col xs={12} md={8}>
                        <Row>
                          <Col xs={12} md={6}>
                            <ErrorMessage
                              name="cities"
                              component="div"
                              style={{ color: 'red' }}
                            />
                            <FormBootstrap.Group controlId="cities">
                              <FormBootstrap.Control
                                name="cities"
                                type="text"
                                className="contact-input"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ',') {
                                    e.preventDefault();
                                    addCityAndUpdateFormik(input);
                                  }
                                }}
                                onBlur={() => addCityAndUpdateFormik(input)}
                              />
                              <div>
                                {cities.map((city, index) => (
                                  <Badge
                                    key={index}
                                    className="me-1 mb-3 he-yellow-b he-dark-c"
                                    style={{ cursor: 'pointer' }}
                                    // onClick={() => removeCity(index)}
                                    onClick={() =>
                                      removeCityAndUpdateFormik(index)
                                    }
                                  >
                                    {city} ✕
                                  </Badge>
                                ))}
                              </div>
                            </FormBootstrap.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <ErrorMessage // here for alignment
                              name="cities"
                              component="div"
                              style={{ visibility: 'hidden' }}
                            />
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
                            <ErrorMessage
                              name="price"
                              component="div"
                              style={{ color: 'red' }}
                            />
                            <Field
                              id="price"
                              name="price"
                              placeholder="Von"
                              type="number"
                              className="no-spinner contact-input"
                            />
                          </Col>
                          <Col xs={12} md={6}>
                            <ErrorMessage
                              name="price_to"
                              component="div"
                              style={{ color: 'red' }}
                            />
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
                      Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen
                      Sie es erneut.
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
              );
            }}
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

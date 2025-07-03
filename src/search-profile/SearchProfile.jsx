import Select from 'react-select';
import { useEffect, useRef, useState } from 'react';
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
import DynamicFields from './DynamicFields';
import { setLastLocation } from '../utils';
import lang from './lang.json';

const validationSchema = Yup.object({
  first_name: Yup.string().required('Vorname ist erforderlich'),
  last_name: Yup.string().required('Nachname ist erforderlich'),
  regions: Yup.array()
    .of(Yup.string().oneOf(germanRegions, 'Ungültige Region'))
    .min(1, 'Mindestens eine Region muss ausgewählt werden')
    .required('Region ist erforderlich'),
  cities: Yup.string().required('Stadt ist erforderlich'),
  rs_types: Yup.string().required('Objekt ist erforderlich'),
  rs_type_categories: Yup.array()
    .min(1, 'Mindestens eine Objektart muss ausgewählt werden')
    .required('Objektart ist erforderlich'),
  phone: Yup.string().matches(/^\d+$/, 'Nur Zahlen erlaubt'),
  email: Yup.string()
    .email('Ungültige E-Mail-Adresse')
    .required('E-Mail ist erforderlich'),
  price: Yup.number().required('Preis von ist erforderlich'),
  price_to: Yup.string().required('Preis bis ist erforderlich'),
});

const SearchProfile = ({ language = 'en' }) => {
  const {
    isSubmitted,
    isLoading,
    isError,
    cities,
    input,
    selectedRegions,
    submit,
    setInput,
    setSelectedRegions,
    setCities,
  } = useSubmitSearchProfile();

  const setFieldValueRef = useRef(null);
  const [selectedRsType, setSelectedRsType] = useState('');

  setLastLocation();

useEffect(() => {
  const defaultCategories =
    rsTypeToCategories[selectedRsType]?.map((item) => item.value) || [];

  if (setFieldValueRef.current) {
    setFieldValueRef.current('rs_type_categories', defaultCategories);
  }
}, [selectedRsType]);

  return (
    <div className="he-dark-b" style={{ paddingTop: 40, minHeight: '100vh' }}>
      <Container>
        <h1 className="he-yellow-c">{lang?.[language].createProfileTitle}</h1>
        <h1 className="he-yellow-c mb-4">{lang?.[language].subtitle}</h1>
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
              rs_type_categories: [],
              regions: [], // <-- new multiselect field
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
            onSubmit={(values) => submit(values)}
          >
            {({ errors, touched, handleChange, setFieldValue, values }) => {
              setFieldValueRef.current = setFieldValue; // ✅ store in ref
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
                          <option value="APARTMENT">Wohnung</option>
                          <option value="HOUSE">Haus</option>
                          <option value="TRADE_SITE">Grundstück</option>
                          <option value="GARAGE">Garage</option>
                          <option value="OFFICE">Büro/Praxis</option>
                          <option value="GASTRONOMY">Gastronomie/Hotels</option>
                          <option value="INDUSTRY">Halle/Produktion</option>
                          <option value="STORE">Einzelhandel</option>
                          <option value="SPECIAL_PURPOSE">Spezialgewerbe</option>
                          <option value="INVESTMENT">Anlageobjekt</option>
                        </FormBootstrap.Select>
                      </Col>
                    </Row>
                    {selectedRsType
                      && rsTypeToCategories?.[selectedRsType]?.length
                      && !rsTypeToCategories?.[selectedRsType]?.[0]?.hide && (
                      <Row className="mb-1">
                        <Col xs={12} md={4}>
                          <Col xs={12}>
                            <h3>Objektart</h3>
                          </Col>
                        </Col>
                        <Col xs={12} md={8}>
       
                           <CategoryCheckboxes
                              selectedRsType={selectedRsType}
                              selectedCategories={values.rs_type_categories}
                              onChange={(updated) => {
                                setFieldValue('rs_type_categories', updated)
                              }}
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
                            <ErrorMessage
                              name="regions"
                              component="div"
                              style={{ color: 'red'}}
                            />
                            {/* <FormBootstrap.Group controlId="regions"> */}
                              <Select
                                isMulti
                                closeMenuOnSelect={false}
                                name="regions"
                                options={germanRegions.map((region) => ({
                                  value: region,
                                  label: region,
                                }))}
                                value={selectedRegions.map((r) => ({
                                  label: r,
                                  value: r,
                                }))}
                                onChange={(selectedOptions) => {
                                  const selected = selectedOptions.map(
                                    (opt) => opt.value
                                  );
                                  setSelectedRegions(selected);
                                  setFieldValue('regions', selected); // sync with Formik
                                }}
                                classNamePrefix="contact-input"
                                // className="contact-input"
                                styles={{
                                  option: (base) => ({
                                    ...base,
                                    color: 'black',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                      backgroundColor: '#e0e0e0',
                                    },
                                  }),
                                  multiValueRemove: (provided) => ({
                                    ...provided,
                                    backgroundColor: 'transparent',
                                    color: '#00796b', // X icon color
                                    ':hover': {
                                      backgroundColor: '#b2dfdb',
                                      color: 'black', // X icon color on hover
                                    },
                                  }),
                                  control: (base) => ({
                                    ...base,
                                    backgroundColor: 'transparent',
                                    color: 'var(--home-ease-light)',
                                  }),
                                }}
                              />
                            {/* </FormBootstrap.Group> */}
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
                    <DynamicFields selectedCategory={selectedRsType} />
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
                      marginBottom: 24
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


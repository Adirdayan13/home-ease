import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';
import { categoryFields } from './utils';
import lang from './langDynamicFields.json';

const DynamicFields = ({ selectedCategory, language }) => {
  const fields = categoryFields[selectedCategory] || [];
// console.log('fields', fields)
  const grouped = {};
  fields.forEach((field) => {
    const isTo = field.value.endsWith('_to');
    const base = isTo ? field.value.replace(/_to$/, '') : field.value;

    if (!grouped[base]) {
      grouped[base] = {};
    }

    if (isTo) {
      grouped[base].to = field;
    } else {
      grouped[base].from = field;
    }
  });


  return Object.entries(grouped).map(([base, pair]) => {
    console.log({ base, pair})
    const label = pair.from?.[language] || pair.to?.[language];
    const type = pair.from?.type || pair.to?.type;

    return (
      <Row key={base} className="mb-1 mt-2">
        <Col xs={12} md={4}>
          <h3>{label}</h3>
        </Col>
        <Col xs={12} md={8}>
          <Row>
            {type === 'boolean' ? (
              <Col xs={12} md={6}>
                <ErrorMessage name={base} component="div" style={{ color: 'red' }} />
                <Field as="select" id={base} name={base} className="contact-input">
                  <option value="">{lang[language]?.select}</option>
                  <option value="true">{lang[language]?.yes}</option>
                  <option value="false">{lang[language]?.no}</option>
                </Field>
              </Col>
            ) : (
              <>
                <Col xs={12} md={6}>
                  <ErrorMessage name={pair.from?.value} component="div" style={{ color: 'red' }} />
                  <Field
                    id={pair.from?.value}
                    name={pair.from?.value}
                    placeholder={lang[language]?.from}
                    type="number"
                    className="no-spinner contact-input"
                    />
                </Col>
                <Col xs={12} md={6}>
                  <ErrorMessage name={pair.to?.value} component="div" style={{ color: 'red' }} />
                  <Field
                    id={pair.to?.value}
                    name={pair.to?.value}
                    placeholder={lang[language]?.to}
                    type="number"
                    className="no-spinner contact-input"
                  />
                </Col>
              </>
            )}
          </Row>
        </Col>
      </Row>
    );
  });
};

export default DynamicFields;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';
import { categoryFields } from './utils';

const DynamicFields = ({ selectedCategory }) => {
  const fields = categoryFields[selectedCategory] || [];

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
    const label = pair.from?.label || pair.to?.label;
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
                  <option value="">Bitte auswählen</option>
                  <option value="true">Ja</option>
                  <option value="false">Nein</option>
                </Field>
              </Col>
            ) : (
              <>
                <Col xs={12} md={6}>
                  <ErrorMessage name={pair.from?.value} component="div" style={{ color: 'red' }} />
                  <Field
                    id={pair.from?.value}
                    name={pair.from?.value}
                    placeholder="Von"
                    type="number"
                    className="no-spinner contact-input"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <ErrorMessage name={pair.to?.value} component="div" style={{ color: 'red' }} />
                  <Field
                    id={pair.to?.value}
                    name={pair.to?.value}
                    placeholder="Bis"
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

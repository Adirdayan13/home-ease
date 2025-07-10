import Form from 'react-bootstrap/Form';
import { rsTypeToCategories } from './utils';

const CategoryCheckboxes = ({
  selectedRsType,
  selectedCategories,
  language,
  onChange,
}) => {
  const categories = rsTypeToCategories?.[selectedRsType] || [];

  const toggleCheck = (value) => {
    const updated = selectedCategories?.includes(value)
      ? selectedCategories.filter((v) => v !== value)
      : [...selectedCategories, value];
    onChange(updated);
  };
  
  return (
    <div className="row row-cols-2 g-2">
      {categories.map(({ value, en, de, hide }) => (
        <div key={value} className="col" style={{ display: hide ? 'none' : 'block' }}>
          <Form.Check
            type="checkbox"
            id={`checkbox-${value}`}
            label={language === 'de' ? de : en}
            checked={selectedCategories?.includes(value)}
            onChange={() => toggleCheck(value)}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryCheckboxes;

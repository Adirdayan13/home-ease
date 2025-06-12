import Form from 'react-bootstrap/Form';
import { rsTypeToCategories } from './utils';

const CategoryCheckboxes = ({
  selectedRsType,
  selectedCategories,
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
      {categories.map(({ value, label }) => (
        <div key={value} className="col">
          <Form.Check
            type="checkbox"
            id={`checkbox-${value}`}
            label={label}
            checked={selectedCategories?.includes(value)}
            onChange={() => toggleCheck(value)}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryCheckboxes;

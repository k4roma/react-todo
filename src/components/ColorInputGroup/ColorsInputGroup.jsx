import "./ColorsInputGroup.scss";

const ColorsInputGroup = ({ colors, onColorChange }) => {
  return (
    <div className="colors">
      {colors.map((color) => {
        return (
          <label key={color.id} className="colors__color-container">
            <input
              onChange={onColorChange}
              type="radio"
              name="radio"
              value={color.name}
              className="colors__color-input"
            />
            <span className={`colors__color-checkmark bg-${color.name}`}></span>
          </label>
        );
      })}
    </div>
  );
};

export default ColorsInputGroup;

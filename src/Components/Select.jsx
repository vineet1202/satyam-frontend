// options - {[label:'Admin',value:'satyam-admin']}

const Select = ({ options, onChangeHandler = () => {}, ref }) => {
  return (
    <select onChange={onChangeHandler} ref={ref}>
      {options.map(({ value, label }) => (
        <option key={value} value={value} >
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;

const Dropdown = ({label,value, data, placeholder, styleClass, onChange}) => {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        <div className={`form-group ${styleClass}`}>
            {label && <label htmlFor="app-input-field">{label}</label>}
            <select
                value={value}
                className="form-control"
                onChange={handleChange}>
                <option value="">{placeholder}</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
};
export default Dropdown
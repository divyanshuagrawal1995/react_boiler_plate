const Checkbox = ({label, selected, styleClass, onChange}) => {

    const handleChange = (event) => {
        const {checked} = event.target;
        onChange(checked);
    };

    return (
        <div className={`form-group ${styleClass}`}>
            <label>
                <input
                    type="checkbox"
                    className='mr-2'
                    value={selected}
                    defaultChecked={selected}
                    onChange={handleChange}/>

                {label}
            </label>
        </div>
    )
};
export default Checkbox
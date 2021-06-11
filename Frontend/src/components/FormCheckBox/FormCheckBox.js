const FormCheckBox = props => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox"  />
            <label className="form-check-label" htmlFor="gridCheck1">
                { props.checkBoxLabel }
            </label>
        </div>
    );
};

export default FormCheckBox;
const FormRadioButton = props => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name="option" id="gridRadios2" value={props.optionValue}/>
            <label className="form-check-label" htmlFor="gridRadios2">
                {props.checkboxValue}
            </label>
        </div>
    );
};

export default FormRadioButton;
import PropTypes from 'prop-types';

const FormRadioButton = (props) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name={props.name ? props.name : "option"}
                id="gridRadios2"
                value={props.optionValue}
            />
            <label className="form-check-label" htmlFor="gridRadios2">
                {props.checkboxValue}
            </label>
        </div>
    );
};

FormRadioButton.propTypes = {
    name: PropTypes.string,
    optionValue: PropTypes.string.isRequired,
    checkboxValue: PropTypes.string.isRequired,
};

export default FormRadioButton;

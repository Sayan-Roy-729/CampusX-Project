import PropTypes from 'prop-types';

const FormCheckBox = (props) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                onChange={props.onChange}
                data-type={props.type && props.type}
            />
            <label className="form-check-label" htmlFor="gridCheck1">
                {props.checkBoxLabel}
            </label>
        </div>
    );
};

FormCheckBox.propTypes = {
    checkBoxLabel: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
};

export default FormCheckBox;

import PropTypes from 'prop-types';

const FormGroup = (props) => {
    return (
        <div className={`form-group ${props.className}`}>
            <label htmlFor="exampleInputEmail1">{props.label}</label>
            <input
                type="text"
                className="form-control"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
            {props.description && (
                <small className="form-text text-muted">
                    {props.description}
                </small>
            )}
        </div>
    );
};

FormGroup.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    description: PropTypes.string,
};

export default FormGroup;

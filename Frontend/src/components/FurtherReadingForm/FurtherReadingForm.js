import PropTypes from "prop-types";

import FormGroup from "../FormGroup/FormGroup";

const FurtherReadingForm = (props) => {
    return (
        <div className="form-row">
            {/* Title input */}
            <FormGroup
                label="Title of Further Reading"
                className="col-md-6"
                description={
                    props.description &&
                    "This is optional field. If you input this field then must have to fill next further reading url field."
                }
                value={props.titleValue}
                onChange={props.titleChange}
            />
            {/* Url Input */}
            <FormGroup
                label="Further Reading URL"
                className="col-md-6"
                value={props.urlValue}
                onChange={props.urlChange}
            />
        </div>
    );
};

FormGroup.propTypes = {
    titleValue: PropTypes.string.isRequired,
    titleChange: PropTypes.func.isRequired,
    urlValue: PropTypes.string.isRequired,
    urlChange: PropTypes.func.isRequired,
};

export default FurtherReadingForm;

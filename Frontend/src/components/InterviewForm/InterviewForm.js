import PropTypes from 'prop-types';

import FormGroup from "../FormGroup/FormGroup";

const InterviewForm = props => {
    return (
        <div className="form-row">
            <FormGroup
                label="Interview Question"
                className="col-md-6"
                description={props.description && "This is optional field. If you input this field then must have to fill next interview answer field."}
                value={props.questionValue}
                onChange={props.questionChange}
            />
            <FormGroup
                label="Answer of the Interview Question"
                className="col-md-6"
                value={props.answerValue}
                onChange={props.answerChange}
            />
        </div>
    );
};

InterviewForm.propTypes = {
    questionValue: PropTypes.string.isRequired,
    questionChange: PropTypes.func.isRequired,
    answerValue: PropTypes.string.isRequired,
    answerChange: PropTypes.func.isRequired,
};

export default InterviewForm;
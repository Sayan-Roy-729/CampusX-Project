import FormGroup from "../FormGroup/FormGroup";

const FurtherReadingForm = props => {
    return (
        <div className="form-row">
            <FormGroup
                label="Title of Further Reading"
                className="col-md-6"
                description="This is optional field. If you input this field then must have to fill next further reading url field."
                value={props.titleValue}
                onChange={props.titleChange}
            />
            <FormGroup
                label="Further Reading URL"
                className="col-md-6"
                value={props.urlValue}
                onChange={props.urlChange}
            />
        </div>
    );
};

export default FurtherReadingForm;
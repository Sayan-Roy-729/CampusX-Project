const FormGroup = (props) => {
    return (
        <div className={`form-group ${props.className}`}>
            <label for="exampleInputEmail1">{props.label}</label>
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

export default FormGroup;

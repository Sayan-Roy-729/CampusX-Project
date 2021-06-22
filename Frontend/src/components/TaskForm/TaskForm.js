import FormGroup from "../FormGroup/FormGroup";

const TaskForm = props => {
    return (
        <div className="form-row">
            <FormGroup
                label="Question of the task"
                className="col-md-6"
                description={props.description && "This is optional field. If you input this field then must have to fill next interview answer field."}
                value={props.taskValue}
                onChange={props.changeTaskValue}
            />
            <FormGroup
                label="Solution of the task"
                className="col-md-6"
                value={props.taskSolutionValue}
                onChange={props.changeTaskSolutionValue}
            />
        </div>
    );
};

export default TaskForm;
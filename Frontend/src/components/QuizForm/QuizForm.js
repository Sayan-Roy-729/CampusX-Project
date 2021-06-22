import FormGroup from "../FormGroup/FormGroup";
import FormRadioButton from "../FormRadioButton/FormRadioButton";

const QuizForm = (props) => {
    return (
        <>
            <FormGroup
                label="Quiz Question"
                description={props.description && "This is optional field. If you input this field then must have to fill the 4 options and have to choose the right option also"}
                value={props.inputQuizQuestion}
                onChange={props.setInputQuizQuestion}
            />

            <div className="form-row">
                <FormGroup
                    label="Quiz Answer - Option 1"
                    className="col-md-6"
                    value={props.inputQuizAnswer1}
                    onChange={props.setInputQuizAnswer1}
                />
                <FormGroup
                    label="Quiz Answer - Option 2"
                    className="col-md-6"
                    value={props.inputQuizAnswer2}
                    onChange={props.setInputQuizAnswer2}
                />
            </div>
            <div className="form-row">
                <FormGroup
                    label="Quiz Answer - Option 3"
                    className="col-md-6"
                    value={props.inputQuizAnswer3}
                    onChange={props.setInputQuizAnswer3}
                />
                <FormGroup
                    label="Quiz Answer - Option 4"
                    className="col-md-6"
                    value={props.inputQuizAnswer4}
                    onChange={props.setInputQuizAnswer4}
                />
            </div>

            <fieldset
                className="form-group row"
                onChange={props.quizOptionChooseHandler}
            >
                <legend className="col-form-label col-sm-4 float-sm-left pt-0">
                    Choose correct option of the <b>Quiz Question</b>
                </legend>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-6">
                            <FormRadioButton
                                checkboxValue="Option 1"
                                optionValue="1"
                            />
                        </div>

                        <div className="col-sm-6">
                            <FormRadioButton
                                checkboxValue="Option 2"
                                optionValue="2"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <FormRadioButton
                                checkboxValue="Option 3"
                                optionValue="3"
                            />
                        </div>

                        <div className="col-sm-6">
                            <FormRadioButton
                                checkboxValue="Option 4"
                                optionValue="4"
                            />
                        </div>
                    </div>
                </div>
            </fieldset>
        </>
    );
};

export default QuizForm;

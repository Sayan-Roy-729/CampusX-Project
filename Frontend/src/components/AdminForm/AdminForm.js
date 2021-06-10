import { useState } from "react";

import FormGroup from "../FormGroup/FormGroup";
import FormRadioButton from "../FormRadioButton/FormRadioButton";
import FormCheckBox from "../FormCheckBox/FormCheckBox";
import axios from "../../config/axios";
import alertMessage from '../../config/alertMessage';

const AdminForm = (props) => {
    const [inputVideoTitle, setInputVideoTitle] = useState("");
    const [inputVideo, setInputVideo] = useState("");
    const [inputTaskQuestion, setInputTaskQuestion] = useState("");
    const [inputTaskSolution, setInputTaskSolution] = useState("");
    const [inputQuizQuestion, setInputQuizQuestion] = useState("");
    const [inputQuizAnswer1, setInputQuizAnswer1] = useState("");
    const [inputQuizAnswer2, setInputQuizAnswer2] = useState("");
    const [inputQuizAnswer3, setInputQuizAnswer3] = useState("");
    const [inputQuizAnswer4, setInputQuizAnswer4] = useState("");
    const [quizOptionsAns, setQuizOptionsAns] = useState("");
    const [inputInterviewQuestion, setInputInterviewQuestion] = useState("");
    const [inputInterviewAnswer, setInputInterviewAnswer] = useState("");
    const [inputFurtherReadingTitle, setInputFurtherReadingTitle] = useState("");
    const [inputFurtherReadingURL, setInputFurtherReadingURL] = useState("");

    const quizOptionChooseHandler = (event) => {
        setQuizOptionsAns(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const contents = new URLSearchParams();
        contents.append("videoTitle", inputVideoTitle);
        contents.append("videoUrl", inputVideo);
        contents.append("quizQuestion", inputQuizQuestion);
        contents.append("quizOption1", inputQuizAnswer1);
        contents.append("quizOption2", inputQuizAnswer2);
        contents.append("quizOption3", inputQuizAnswer3);
        contents.append("quizOption4", inputQuizAnswer4);
        contents.append("quizRightOption", quizOptionsAns);
        contents.append("taskQuestion", inputTaskQuestion);
        contents.append("taskSolution", inputTaskSolution);
        contents.append("interviewQuestion", inputInterviewQuestion);
        contents.append("interviewAnswer", inputInterviewAnswer);
        contents.append("furtherReadingTitle", inputFurtherReadingTitle);
        contents.append("furtherReadingUrl", inputFurtherReadingURL);

        if (!inputVideoTitle || inputVideoTitle === '' || !inputVideo || inputVideo === '') {
            alertMessage('error', 'Error!', 'Please fill up the Video title & Video i-frame tag fields', false, true);
            return;
        }

        if (inputQuizQuestion && (!inputQuizAnswer1 || !inputQuizAnswer2 || !inputQuizAnswer3 || !inputQuizAnswer4 || !quizOptionsAns)) {
            alertMessage('error', 'Error!', 'You filled Quiz Question field. So you have to also fill the other quiz related field.', false, true);
            return;
        }

        if (inputTaskQuestion && !inputTaskSolution) {
            alertMessage('error', 'Error!', 'You have filled Task Question field. So have to fill the Task Solution', false, true);
            return;
        }

        if (inputInterviewQuestion && !inputInterviewAnswer) {
            alertMessage('error', 'Error!', 'You have filled Interview Question field. SO you have to also fill the Answer of the Interview Question filed', false, true);
            return;
        }

        if (inputFurtherReadingTitle && !inputFurtherReadingURL) {
            alertMessage('error', 'Error!', 'You have filled Title of Further Reading filed. So you also have to fill the Further Reading URL', false, true);
            return;
        }

        axios({
            method: "POST",
            url: "/admin/upload",
            headers: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            data: contents,
        })
            .then((response) => {
                console.log(response);
                alertMessage('success', 'Successful!', 'Content added successfully', true, false);
            })
            .catch((err) => {
                console.log(err);
                alertMessage('error', 'Error!', 'Failed to upload! Try again', false, true);
            });
    };

    return (
        <form className="text-white" onSubmit={formSubmitHandler}>
            <FormGroup
                label="Video title"
                description="Title of the Video. Required"
                value={inputVideo}
                onChange={setInputVideo}
            />

            <FormGroup
                label="Video i-frame tag"
                description="Please enter the iframe YouTube Video URL. This is required"
                value={inputVideoTitle}
                onChange={setInputVideoTitle}
            />

            <FormGroup
                label="Task Question"
                value={inputTaskQuestion}
                description="If you enter this field, then you mush have to enter the next Task Solution field."
                onChange={setInputTaskQuestion}
            />

            <FormGroup
                label="Task Solution"
                value={inputTaskSolution}
                onChange={setInputTaskSolution}
            />

            <FormGroup
                label="Quiz Question"
                description="This is optional field. If you input this field then must have to fill the 4 options and have to choose the right option also"
                value={inputQuizQuestion}
                onChange={setInputQuizQuestion}
            />

            <div className="form-row">
                <FormGroup
                    label="Quiz Answer - Option 1"
                    className="col-md-6"
                    value={inputQuizAnswer1}
                    onChange={setInputQuizAnswer1}
                />
                <FormGroup
                    label="Quiz Answer - Option 2"
                    className="col-md-6"
                    value={inputQuizAnswer2}
                    onChange={setInputQuizAnswer2}
                />
            </div>
            <div className="form-row">
                <FormGroup
                    label="Quiz Answer - Option 3"
                    className="col-md-6"
                    value={inputQuizAnswer3}
                    onChange={setInputQuizAnswer3}
                />
                <FormGroup
                    label="Quiz Answer - Option 4"
                    className="col-md-6"
                    value={inputQuizAnswer4}
                    onChange={setInputQuizAnswer4}
                />
            </div>

            <fieldset
                className="form-group row"
                onChange={quizOptionChooseHandler}
            >
                <legend className="col-form-label col-sm-4 float-sm-left pt-0">
                    Choose correct option of the <b>Quiz Question</b>
                </legend>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-6">
                            <FormRadioButton checkboxValue="Option 1" optionValue='1'/>
                        </div>

                        <div className="col-sm-6">
                            <FormRadioButton checkboxValue="Option 2" optionValue='2'/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <FormRadioButton checkboxValue="Option 3" optionValue='3'/>
                        </div>

                        <div className="col-sm-6">
                            <FormRadioButton checkboxValue="Option 4" optionValue='4'/>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="form-row">
                <FormGroup
                    label="Interview Question"
                    className="col-md-6"
                    description="This is optional field. If you input this field then must have to fill next interview answer field."
                    value={inputInterviewQuestion}
                    onChange={setInputInterviewQuestion}
                />
                <FormGroup
                    label="Answer of the Interview Question"
                    className="col-md-6"
                    value={inputInterviewAnswer}
                    onChange={setInputInterviewAnswer}
                />
            </div>
            <div className="form-group row">
                <div className="col-sm-6 offset-sm-4">
                    <FormCheckBox checkBoxLabel="Add another Interview Question & Answer" />
                </div>
            </div>

            <div className="form-row">
                <FormGroup
                    label="Title of Further Reading"
                    className="col-md-6"
                    description="This is optional field. If you input this field then must have to fill next further reading url field."
                    value={inputFurtherReadingTitle}
                    onChange={setInputFurtherReadingTitle}
                />
                <FormGroup
                    label="Further Reading URL"
                    className="col-md-6"
                    value={inputFurtherReadingURL}
                    onChange={setInputFurtherReadingURL}
                />
            </div>
            <div className="form-group row">
                <div className="col-sm-6 offset-sm-4">
                    <FormCheckBox checkBoxLabel="Add another one further reading content" />
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-block">
                Add
            </button>
        </form>
    );
};

export default AdminForm;

import { useState } from "react";
import { useDispatch } from "react-redux";

import FormGroup from "../FormGroup/FormGroup";
import QuizForm from "../QuizForm/QuizForm";
import InterviewForm from "../InterviewForm/InterviewForm";
import FurtherReadingForm from "../FurtherReadingForm/FurtherReadingForm";
import alertMessage from "../../config/alertMessage";
import { uploadContent } from "../../store/actions/videoActions";
import TaskForm from "../TaskForm/TaskForm";

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
    const [inputFurtherReadingTitle, setInputFurtherReadingTitle] =
        useState("");
    const [inputFurtherReadingURL, setInputFurtherReadingURL] = useState("");

    const dispatch = useDispatch();

    const quizOptionChooseHandler = (event) => {
        setQuizOptionsAns(event.target.value);
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        const contents = new URLSearchParams();
        contents.append("videoTitle", inputVideo);
        contents.append("videoUrl", inputVideoTitle);
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

        if (
            !inputVideoTitle ||
            inputVideoTitle === "" ||
            !inputVideo ||
            inputVideo === ""
        ) {
            alertMessage(
                "error",
                "Error!",
                "Please fill up the Video title & Video i-frame tag fields",
                false,
                true
            );
            return;
        }

        if (
            inputQuizQuestion &&
            (!inputQuizAnswer1 ||
                !inputQuizAnswer2 ||
                !inputQuizAnswer3 ||
                !inputQuizAnswer4 ||
                !quizOptionsAns)
        ) {
            alertMessage(
                "error",
                "Error!",
                "You filled Quiz Question field. So you have to also fill the other quiz related field.",
                false,
                true
            );
            return;
        }

        if (inputTaskQuestion && !inputTaskSolution) {
            alertMessage(
                "error",
                "Error!",
                "You have filled Task Question field. So have to fill the Task Solution",
                false,
                true
            );
            return;
        }

        if (inputInterviewQuestion && !inputInterviewAnswer) {
            alertMessage(
                "error",
                "Error!",
                "You have filled Interview Question field. SO you have to also fill the Answer of the Interview Question filed",
                false,
                true
            );
            return;
        }

        if (inputFurtherReadingTitle && !inputFurtherReadingURL) {
            alertMessage(
                "error",
                "Error!",
                "You have filled Title of Further Reading filed. So you also have to fill the Further Reading URL",
                false,
                true
            );
            return;
        }

        try {
            await dispatch(uploadContent(contents));
            alertMessage(
                "success",
                "Successful!",
                "Content added successfully",
                true,
                false
            );
        } catch (error) {
            alertMessage(
                "error",
                "Error!",
                "Failed to upload! Try again",
                false,
                true
            );
        }
    };

    return (
        <form onSubmit={formSubmitHandler} style={{ marginBottom: "60px" }}>
            <FormGroup
                label="Video title"
                description="Title of the Video. Required"
                value={inputVideo}
                onChange={setInputVideo}
            />

            <FormGroup
                label="Video URL"
                description="Please enter the iframe YouTube Video URL. This is required"
                value={inputVideoTitle}
                onChange={setInputVideoTitle}
            />

            <TaskForm
                taskValue={inputTaskQuestion}
                changeTaskValue={setInputTaskQuestion}
                taskSolutionValue={inputTaskSolution}
                changeTaskSolutionValue={setInputTaskSolution}
            />

            <QuizForm
                inputQuizQuestion={inputQuizQuestion}
                setInputQuizQuestion={setInputQuizQuestion}
                inputQuizAnswer1={inputQuizAnswer1}
                setInputQuizAnswer1={setInputQuizAnswer1}
                inputQuizAnswer2={inputQuizAnswer2}
                setInputQuizAnswer2={setInputQuizAnswer2}
                inputQuizAnswer3={inputQuizAnswer3}
                setInputQuizAnswer3={setInputQuizAnswer3}
                inputQuizAnswer4={inputQuizAnswer4}
                setInputQuizAnswer4={setInputQuizAnswer4}
                quizOptionChooseHandler={quizOptionChooseHandler}
            />

            <InterviewForm
                questionValue={inputInterviewQuestion}
                questionChange={setInputInterviewQuestion}
                answerValue={inputInterviewAnswer}
                answerChange={setInputInterviewAnswer}
            />

            <FurtherReadingForm
                titleValue={inputFurtherReadingTitle}
                titleChange={setInputFurtherReadingTitle}
                urlValue={inputFurtherReadingURL}
                urlChange={setInputFurtherReadingURL}
            />

            <button type="submit" className="btn btn-dark btn-block">
                Add
            </button>
        </form>
    );
};

export default AdminForm;

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
    // States of the form
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
    // Set id of the quiz which is the user selected
    const quizOptionChooseHandler = (event) => {
        setQuizOptionsAns(event.target.value);
    };

    // Submit the form
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        // Create a form encoded data
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
        // Validate the video related inputs 
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
        // Validate Quiz related inputs
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
        // Validate the task related inputs
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
        // Validate the interview related inputs
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
        // Validate the further reading related inputs
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
        // Submit the form by passing data to the actions 
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
        // Clear the inputs
        setInputVideoTitle('');
        setInputVideo('');
        setInputTaskQuestion('');
        setInputTaskSolution('');
        setInputQuizQuestion('');
        setInputQuizAnswer1('');
        setInputQuizAnswer2('');
        setInputQuizAnswer3('');
        setInputQuizAnswer4('');
        setInputInterviewQuestion('');
        setInputInterviewAnswer('');
        setInputFurtherReadingTitle('');
        setInputFurtherReadingURL('');
    };

    return (
        <form onSubmit={formSubmitHandler} style={{ marginBottom: "60px" }}>
            {/* Input Video Title */}
            <FormGroup
                label="Video title"
                description="Title of the Video. Required"
                value={inputVideo}
                onChange={setInputVideo}
            />
            {/* Input video embed url */}
            <FormGroup
                label="Video URL"
                description="Please enter the iframe YouTube Video URL. This is required"
                value={inputVideoTitle}
                onChange={setInputVideoTitle}
            />
            {/* Input Task related form */}
            <TaskForm
                description
                taskValue={inputTaskQuestion}
                changeTaskValue={setInputTaskQuestion}
                taskSolutionValue={inputTaskSolution}
                changeTaskSolutionValue={setInputTaskSolution}
            />
            {/* Input quiz related form */}
            <QuizForm
                description
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
            {/* Input interview related form */}
            <InterviewForm
                description
                questionValue={inputInterviewQuestion}
                questionChange={setInputInterviewQuestion}
                answerValue={inputInterviewAnswer}
                answerChange={setInputInterviewAnswer}
            />
            {/* Input Further Reading Content related form */}
            <FurtherReadingForm
                description
                titleValue={inputFurtherReadingTitle}
                titleChange={setInputFurtherReadingTitle}
                urlValue={inputFurtherReadingURL}
                urlChange={setInputFurtherReadingURL}
            />
            {/* Submit button */}
            <button type="submit" className="btn btn-dark btn-block">
                Add
            </button>
        </form>
    );
};


export default AdminForm;

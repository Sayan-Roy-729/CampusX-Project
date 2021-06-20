import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./AdminUpdatePage.css";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";
import UpdateSelectOptions from "../../components/UpdateSelectOptions/UpdateSelectOptions";
import QuizForm from "../../components/QuizForm/QuizForm";
import InterviewForm from "../../components/InterviewForm/InterviewForm";
import FurtherReadingForm from "../../components/FurtherReadingForm/FurtherReadingForm";
import TaskForm from "../../components/TaskForm/TaskForm";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import alertMessage from "../../config/alertMessage";
import { uploadQuiz, uploadTask } from '../../store/actions/videoActions';
import { uploadInterview } from '../../store/actions/videoActions';
import { uploadFurtherReading } from '../../store/actions/videoActions';
import { videoContent, updateTask } from '../../store/actions/videoActions';
import { updateQuiz, updateInterview } from '../../store/actions/videoActions';
import { updateFurtherReading } from '../../store/actions/videoActions';

const AdminUpdatePage = (props) => {
    const [selectedVideoId, setSelectedVideoId] = useState();
    const [selectedContent, setSelectedContent] = useState();
    // Task Related
    const [inputTaskQuestion, setInputTaskQuestion] = useState("");
    const [inputTaskSolution, setInputTaskSolution] = useState("");
    // Quiz Related State
    const [inputQuizQuestion, setInputQuizQuestion] = useState();
    const [inputQuizAnswer1, setInputQuizAnswer1] = useState();
    const [inputQuizAnswer2, setInputQuizAnswer2] = useState();
    const [inputQuizAnswer3, setInputQuizAnswer3] = useState();
    const [inputQuizAnswer4, setInputQuizAnswer4] = useState();
    const [quizRightOption, setQuizRightOption] = useState();
    const [selectedQuizId, setSelectedQuizId] = useState();
    // Interview Related State
    const [inputInterviewQuestion, setInputInterviewQuestion] = useState("");
    const [inputInterviewAnswer, setInputInterviewAnswer] = useState("");
    const [selectedInterviewId, setSelectedInterviewId] = useState();
    // Further Reading Related State
    const [inputFurtherReadingTitle, setInputFurtherReadingTitle] =
        useState("");
    const [inputFurtherReadingURL, setInputFurtherReadingURL] = useState("");
    const [selectedFurtherReading, setSelectedFurtherReading] = useState();

    const videosState = useSelector((state) => state.video);
    const videos = videosState.videos;
    const dispatch = useDispatch();

    // Select the video 
    const videoSelectHandler = (event) => {
        setSelectedVideoId(event.target.value);
    };

    // Select the Contents related to the video
    const videoContentSelectHandler = (event) => {
        setSelectedContent(event.target.value);
        setInputInterviewQuestion('');
        setInputInterviewAnswer('');
        setInputFurtherReadingTitle('');
        setInputFurtherReadingURL('');
        if (videosState.task.id) {
            setInputTaskQuestion(videosState.task.question);
            setInputTaskSolution(videosState.task.solution);
        }
    };

    const quizOptionChooseHandler = (event) => {
        setQuizRightOption(event.target.value);
    };

    // Fetch the contents related to a video
    useEffect(() => {
        if (selectedVideoId) {
            dispatch(videoContent(selectedVideoId));
        }
    }, [dispatch, selectedVideoId]);

    // To update a quiz
    const selectedQuizToChange = event => {
        const quiz = videosState.quizzes.find(quiz => quiz.id.toString() === event.target.value );
        setSelectedQuizId(event.target.value);
        setInputQuizQuestion(quiz.question);
        setInputQuizAnswer1(quiz.option1);
        setInputQuizAnswer2(quiz.option2);
        setInputQuizAnswer3(quiz.option3);
        setInputQuizAnswer4(quiz.option4);
        setQuizRightOption(quiz.right);
    }

    // To update a interview related content
    const selectedInterviewToChange = event => {
        const interview = videosState.interview.find(item => item.id.toString() === event.target.value);
        setSelectedInterviewId(event.target.value);
        setInputInterviewQuestion(interview.question);
        setInputInterviewAnswer(interview.answer);
    };

    // To update a further reading content
    const selectedFurtherReadingToChange = event => {
        const furtherReading = videosState.furtherReading.find(item => item.id.toString() === event.target.value);
        setSelectedFurtherReading(event.target.value);
        setInputFurtherReadingTitle(furtherReading.title);
        setInputFurtherReadingURL(furtherReading.url);
    };

    // Submit the form
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const contents = new URLSearchParams();
        contents.append("videoId", selectedVideoId);
        try {
            if (selectedContent === "2" || selectedContent === '5') {
                contents.append("option1", inputQuizAnswer1);
                contents.append("option2", inputQuizAnswer2);
                contents.append("option3", inputQuizAnswer3);
                contents.append("option4", inputQuizAnswer4);
                contents.append("question", inputQuizQuestion);
                contents.append("right", quizRightOption);
            } else if (selectedContent === "3" || selectedContent === '6') {
                contents.append("question", inputInterviewQuestion);
                contents.append("answer", inputInterviewAnswer);
            } else if (selectedContent === "4" || selectedContent === '7') {
                contents.append("title", inputFurtherReadingTitle);
                contents.append("url", inputFurtherReadingURL);
            }

            if (selectedContent === '1' && videosState.task.id) {
                contents.append('taskId', videosState.task.id);
                contents.append('question', inputTaskQuestion);
                contents.append('solution', inputTaskSolution);
                await dispatch(updateTask(contents));
            } else if (selectedContent === '1') {
                contents.append('question', inputTaskQuestion);
                contents.append('solution', inputTaskSolution);
                await dispatch(uploadTask(contents));
            }

            if (selectedContent === '2') {
                await dispatch(uploadQuiz(contents));
            } else if (selectedContent === '5') {
                contents.append('quizId', selectedQuizId);
                dispatch(updateQuiz(contents));
            } else if (selectedContent === '3') {
                await dispatch(uploadInterview(contents));
            } else if (selectedContent === '6') {
                contents.append('interviewId', selectedInterviewId);
                await dispatch(updateInterview(contents));
            } else if (selectedContent === '4') {
                await dispatch(uploadFurtherReading(contents));
            } else if (selectedContent === '7') {
                contents.append('furtherReadingId', selectedFurtherReading);
                await dispatch(updateFurtherReading(contents));
            }
            alertMessage('success', 'Success', 'Your operation is done successfully', false, true);
        } catch (error) {
            alertMessage('error', 'Error!', 'Upload failed! Try again.', false, true);
        }
    };

    if (videosState.loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="container Admin__Update__Form__Container ">
            <div className="row py-4">
                <div className="col-md-6">
                    <h4>Which video you want to update?</h4>
                    <DropdownSelect
                        videos={videos}
                        default="Choose a video from the list"
                        onChange={videoSelectHandler}
                    />
                </div>
                <div className="col-md-6">
                    <h4>What topic you want to update?</h4>
                    <UpdateSelectOptions
                        selectedVideoId={selectedVideoId}
                        onChange={videoContentSelectHandler}
                    />
                </div>
            </div>
            <hr />
            <div className="row pt-3 pb-5">
                <div className="col-md-12">
                    <form onSubmit={formSubmitHandler}>
                        {/* Select the quiz to update from the dropdown */}
                        {selectedContent === '5' && (
                            <div className = "mb-2">
                                <h5>Please select which quiz you want to update.</h5>
                                <DropdownSelect 
                                    default = 'Please choose a quiz...'
                                    quizzes = {videosState.quizzes}
                                    onChange = {selectedQuizToChange}
                                />
                            </div>
                        )}

                        {/* Select the interview question to update from the dropdown */}
                        {selectedContent === '6' && (
                            <div className = "mb-2">
                            <h5>Please select which interview you want to update.</h5>
                            <DropdownSelect 
                                default = 'Please choose...'
                                interview = {videosState.interview}
                                onChange = {selectedInterviewToChange}
                            />
                            </div>
                        )}

                        {/* Select the further reading content to update from the dropdown */}
                        {selectedContent === '7' && (
                            <div className = "mb-2">
                            <h5>Please select which further reading content you want to update.</h5>
                            <DropdownSelect 
                                default = 'Please choose...'
                                furtherReading = {videosState.furtherReading}
                                onChange = {selectedFurtherReadingToChange}
                            />
                            </div>
                        )}

                        {/* Task Related Input */}
                        {selectedContent === '1' && (
                            <TaskForm
                                taskValue={inputTaskQuestion}
                                changeTaskValue={setInputTaskQuestion}
                                taskSolutionValue={inputTaskSolution}
                                changeTaskSolutionValue={setInputTaskSolution}
                            />
                        )}

                        {/* Quiz Related Input */}
                        {((selectedContent === "2" || selectedContent === '5')) && (
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
                                quizOptionChooseHandler={
                                    quizOptionChooseHandler
                                }
                            />
                        )}
                        {/* Interview Related Input */}
                        {(selectedContent === "3" || selectedContent === '6') && (
                            <InterviewForm
                                questionValue={inputInterviewQuestion}
                                questionChange={setInputInterviewQuestion}
                                answerValue={inputInterviewAnswer}
                                answerChange={setInputInterviewAnswer}
                            />
                        )}
                        {/* Further Reading Input */}
                        {(selectedContent === "4" || selectedContent === '7') && (
                            <FurtherReadingForm
                                titleValue={inputFurtherReadingTitle}
                                titleChange={setInputFurtherReadingTitle}
                                urlValue={inputFurtherReadingURL}
                                urlChange={setInputFurtherReadingURL}
                            />
                        )}
                        <button
                            className="btn btn-dark float-right"
                            type="submit"
                            disabled={!selectedContent ? true : false}
                        >
                            Upload
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminUpdatePage;

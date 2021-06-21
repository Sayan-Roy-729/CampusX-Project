import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import VideoContentSelect from "../../components/VideoContentSelect/VideoContentSelect";
import alertMessage from "../../config/alertMessage";
// import { deleteVideo } from '../../store/actions/videoActions';
import { deleteVideo, deleteTask } from '../../store/actions/videoActions';
import { deleteQuiz, deleteInterview } from '../../store/actions/videoActions';
import { deleteFurtherReading } from "../../store/actions/videoActions";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";

const AdminDeletePage = (props) => {
    const [selectedVideoId, setSelectedVideoId] = useState();
    const [selectedContent, setSelectedContent] = useState();
    const [selectedQuiz, setSelectedQuiz] = useState();
    const [selectedInterview, setSelectedInterview] = useState();
    const [selectedFurtherReading, setSelectedFurtherReading] = useState();
    const videoState = useSelector(state => state.video);
    const videos = videoState.videos;
    const dispatch = useDispatch();

    // Select the video
    const videoSelectHandler = (event) => {
        setSelectedVideoId(event.target.value);
    };

    // Select the Contents related to the video
    const videoContentSelectHandler = (event) => {
        setSelectedContent(event.target.value);
    };

    console.log(props);

    const formSubmitHandler =  async (event) => {
        event.preventDefault();
        // Delete the video
        if (selectedVideoId && !selectedContent) {
            await dispatch(deleteVideo(selectedVideoId));
        } else if (selectedVideoId && selectedContent === '1') {
            // Delete task
            if (videoState.task.id) {
                await dispatch(deleteTask((videoState.task.id)));
            }
        } else if (selectedVideoId && selectedContent === '2') {
            // Delete Quiz
            await dispatch(deleteQuiz(selectedQuiz));
        } else if (selectedVideoId && selectedContent === '3') {
            // Delete interview
            await dispatch(deleteInterview(selectedInterview));
        } else if (selectedVideoId && selectedContent === '4') {
            // Delete further reading
            await dispatch(deleteFurtherReading(selectedFurtherReading));
        }
        props.history.push('/admin');
    };

    if (videoState.errorMessage) {
        alertMessage('error', 'Error', 'Your operation is failed! Try again', false, true);
    }

    if (!videos || videos.length <= 0) {
        return (
            <div className = "container">
                <div className = "row my-3">
                    <div className = "col-md-12">
                        <h1 className = "text-muted text-center">😔Video Not Found</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container Admin__Update__Form__Container ">
            <VideoContentSelect
                purpose="delete"
                videoSelectHandler={videoSelectHandler}
                selectedVideoId={selectedVideoId}
                videoContentSelectHandler={videoContentSelectHandler}
            />
            <div className="row pt-3 pb-5">
                <div className="col-md-12">
                    <form onSubmit={formSubmitHandler}>
                        {
                            selectedContent === '1' && (
                                <h4 className = "text-muted text-center">
                                    You choose the task. Only click the delete button to delete the task
                                </h4>
                            )
                        }
                        {
                            selectedContent === '2' && (
                                <DropdownSelect
                                    default = 'Choose the quiz...'
                                    quizzes = {videoState.quizzes}
                                    onChange = {setSelectedQuiz}
                                />
                            )
                        }
                        {
                            selectedContent === '3' && (
                                <DropdownSelect 
                                    default = 'Choose the interview question...'
                                    interview = {videoState.interview}
                                    onChange = {setSelectedInterview}
                                />
                            )
                        }
                        {
                            selectedContent === '4' && (
                                <DropdownSelect 
                                    default = 'Choose the further reading content...'
                                    furtherReading = {videoState.furtherReading}
                                    onChange = {setSelectedFurtherReading}
                                />
                            )
                        }
                        <button
                            type="submit"
                            className="btn btn-dark float-right"
                            disabled={!selectedVideoId ? true : false}
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminDeletePage;

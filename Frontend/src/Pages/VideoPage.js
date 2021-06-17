import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './VideoPage.css';
import TabList from '../components/TabList/TabList';
import VideoFrame from '../components/VideoFrame/VideoFrame';
import CollapseContainer from '../components/CollapseContainer/CollapseContainer';
import { videoContent, getVideos } from '../store/actions/videoActions';

const VideoPage = props => {
    const videos = useSelector(state => state.video.videos);
    const [videoIndex, setVideoId] = useState(0);
    const dispatch = useDispatch();

    const changeVideoHandler = index => {
        setVideoId(index);
        // Fetch the contents related to the video
        const videoId = videos[index].id;
        dispatch(videoContent(videoId));
    };

    useEffect(() => {
        dispatch(getVideos());
        dispatch(videoContent(videoIndex + 1));
    }, [dispatch, videoIndex]);

    return (
        <div className="container Video__Container">
            {
                videos.length > 0 ? (
                    <div className = "row py-3 px-2 Video__Container__Row">
                        <div className = "col-md-4 mt-3 Video__List__Container">
                            <TabList video = {videos[0]} changeVideoHandler = {changeVideoHandler}/>
                        </div>
                        <div className = "col-md-8 Video__Content_Container">
                            <VideoFrame src = {videos[videoIndex].url} videoTitle = {videos[videoIndex].title}/>
                            <h1 className = "text-white mt-4 mb-3">Other Content related to this Video</h1>
                            <CollapseContainer/>
                        </div>
                    </div>
                ) : (
                    <div className = "row d-flex align-items-center justify-content-center py-3 px-2">
                        <h1 className = 'text-muted'>Video is not available</h1>
                    </div>
                )
            }
            
        </div>
    );
};

export default VideoPage;
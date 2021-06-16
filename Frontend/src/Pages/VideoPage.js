import { useState } from 'react';
import { useSelector } from 'react-redux';

import './VideoPage.css';
import TabList from '../components/TabList/TabList';
import VideoFrame from '../components/VideoFrame/VideoFrame';

const VideoPage = props => {
    const videos = useSelector(state => state.video.videos);
    const [videoIndex, setVideoId] = useState(0);
    console.log('Video page props: ', props);

    const changeVideoHandler = index => {
        setVideoId(index);
    };

    return (
        <div className="container Video__Container">
            <div className = "row d-flex align-items-center">
                <div className = "col-md-4">
                    <TabList video = {videos[0]} changeVideoHandler = {changeVideoHandler}/>
                </div>
                <div className = "col-md-8">
                    <VideoFrame src = {videos[videoIndex].url} videoTitle = {videos[videoIndex].title}/>
                </div>
            </div>
        </div>
    );
};

export default VideoPage;
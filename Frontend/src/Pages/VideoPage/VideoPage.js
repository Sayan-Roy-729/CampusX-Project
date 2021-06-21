import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './VideoPage.css';
import VideoList from '../../components/VideoList/VideoList';
import VideoFrame from '../../components/VideoFrame/VideoFrame';
import CollapseContainer from '../../components/CollapseContainer/CollapseContainer';
import { videoContent } from '../../store/actions/videoActions';

const VideoPage = props => {
    const videos = useSelector(state => state.video.videos);
    const [videoId, setVideoId] = useState(videos.length > 0 ? videos[0].id : null);
    const dispatch = useDispatch();

    // Change Video and it's contents
    const changeVideoHandler = id => {
        setVideoId(id);
        // Fetch the contents related to the video
        dispatch(videoContent(id));
    };

    useEffect(() => {
        if (videoId) {
            dispatch(videoContent(videoId));
        } else if (videos.length > 0) {
            setVideoId(videos[0].id);
            dispatch(videoContent(videos[0].id));
        }
    }, [dispatch, videoId, videos.length]);

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
        <div className = "container">
            <div className = "row">
                <div className = "col-md-4 my-2 video__list__group">
                    <VideoList changeVideoHandler = {changeVideoHandler}/>
                </div>
                <div className = "col-md-8 video_play_content_group">
                    {
                        videos.map(video => {
                            if (video.id === videoId) {
                                return (
                                    <>
                                    <h2 className="text-muted" style={{fontWeight: 'bold'}}>{video.title}</h2>
                                    <VideoFrame src = {videos.find(video => video.id === videoId).url}/>
                                    </>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                    <hr className="my-4 bg-dark" />
                    <h4 className = "text-muted text-center">Related to this video</h4>
                    <CollapseContainer />
                </div>
            </div>
        </div>
    );
};

export default VideoPage;
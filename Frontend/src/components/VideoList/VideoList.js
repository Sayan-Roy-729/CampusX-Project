import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoList = (props) => {
    const videos = useSelector((state) => state.video.videos);

    return (
        <div className="list-group">
            {videos.length > 0 &&
                videos.map((video) => (
                    <Link
                        to="/videos"
                        key = {video.id}
                        className="list-group-item list-group-item-action"
                        onClick={(e) => props.changeVideoHandler(video.id)}
                    >
                        {video.title}
                    </Link>
                ))}
        </div>
    );
};

export default VideoList;

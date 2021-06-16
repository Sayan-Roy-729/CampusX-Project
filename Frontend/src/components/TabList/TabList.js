import { useSelector } from "react-redux";

const TabList = (props) => {
    const videoState = useSelector((state) => state.video);

    return (
        <div class="list-group">
            {videoState.videos &&
                videoState.videos.map((video, index) => {
                    return (
                        <button
                            key={video.id}
                            type="button"
                            class="list-group-item list-group-item-action"
                            onClick={() => props.changeVideoHandler(index)}
                        >
                            {video.title}
                        </button>
                    );
                })}
        </div>
    );
};

export default TabList;

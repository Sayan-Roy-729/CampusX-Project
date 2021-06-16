import { useSelector } from "react-redux";

const Videos = (props) => {
    const videos = useSelector((state) => state.video.videos);
    return (
        <div className="container py-3 px-2">
            <div className = "row">
                <div className = "col-md-12">
                    <h2 className="text-white">{props.videoTitle}</h2>
                </div>
            </div>
            <iframe
                width="560"
                height="315"
                src={props.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default Videos;

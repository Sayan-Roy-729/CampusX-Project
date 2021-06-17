const Videos = (props) => {
    return (
        <div className="container d-flex flex-column justify-content-center">
            <div className = "row">
                <div className = "col-md-12 d-flex justify-content-center">
                    <h2 className="text-white">{props.videoTitle}</h2>
                </div>
            </div>
            <div className = "row ">
                <div className = "col-md-12 d-flex justify-content-center">
                    <iframe
                        width="560"
                        height="315"
                        src={props.src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Videos;

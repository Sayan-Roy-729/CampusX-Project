import { useState, useEffect } from 'react';

import './VideoFrame.css';

const Videos = (props) => {
    const [iframeHeight, setIframeHeight] = useState('250');

    useEffect(() => {
        setIframeHeight('315');
    }, []);

    return (
        <iframe
            width="100%"
            height={iframeHeight}
            title="YouTube video player"
            frameBorder="0"
            src = {props.src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default Videos;

import { useSelector } from "react-redux";

import DropdownSelect from "../DropdownSelect/DropdownSelect";
import UpdateSelectOptions from "../UpdateSelectOptions/UpdateSelectOptions";

const VideoContentSelect = props => {
    const videos = useSelector(state => state.video.videos);
    return (
        <div className="row py-4">
            <div className="col-md-6">
                <h4>Which video you want to {props.purpose}?</h4>
                <DropdownSelect
                    videos={videos}
                    default="Choose a video from the list"
                    onChange={props.videoSelectHandler}
                />
            </div>
            <div className="col-md-6">
                <h4>What topic you want to {props.purpose}?</h4>
                <UpdateSelectOptions
                    selectedVideoId={props.selectedVideoId}
                    onChange={props.videoContentSelectHandler}
                    purpose = {props.purpose}
                />
            </div>
        </div>
    );
};

export default VideoContentSelect;
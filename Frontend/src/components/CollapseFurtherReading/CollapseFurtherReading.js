import { useSelector } from "react-redux";

import './CollapseFurtherReading.css';

const CollapseFurtherReading = props => {
    const furtherReading = useSelector(state => state.video.furtherReading);

    return (
        <div className="card">
            <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                    <button className="btn btn-block text-middle collapsed" type="button" data-toggle="collapse" data-target="#further-reading" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Further Reading</strong>
                    </button>
                </h2>
            </div>
            <div id="further-reading" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                    {
                        furtherReading.length > 0 && (
                            furtherReading.map((item, index) => {
                                return (
                                    <div className = "Further__Reading" key = {index}>
                                        <span>{index + 1}</span>
                                        <a key = {item.id} href = {item.url} className="FurtherReading__Title__Link" target='_blank'>{item.title}</a>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CollapseFurtherReading;
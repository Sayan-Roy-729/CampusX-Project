import { useSelector } from "react-redux";

const CollapseInterviewContainer = props => {
    const interview = useSelector(state => state.video.interview);

    return (
        <div className="card">
            <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                    <button className="btn btn-block text-middle collapsed" type="button" data-toggle="collapse" data-target="#interview" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Interview Related</strong>
                    </button>
                </h2>
            </div>
            <div id="interview" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                    {
                        interview.length > 0 ? interview.map(item => {
                            return (
                                <div key = {item.id}>
                                    <h5 className = "text-muted"><strong>{item.question}</strong></h5>
                                    <p><span style={{fontWeight: 'bolder'}}>Ans: </span>{item.answer}</p>
                                </div>
                            );
                        }) : (
                            <h4 className = "text-muted text-center">There is no interview questions related to this video</h4>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CollapseInterviewContainer;
import { useSelector } from 'react-redux';

const CollapseTaskContainer = props => {
    const task = useSelector(state => state.video.task);

    return (
        <div className="card">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-block text-middle" type="button" data-toggle="collapse" data-target={`#task-${task.id}`} aria-expanded="true" aria-controls="collapseOne">
                        <strong>Task</strong>
                    </button>
                </h2>
            </div>

            <div id={`task-${task.id}`} className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    <h4 className = "text-muted"><strong>Question: {task.question}</strong></h4>
                    <p>{task.solution}</p>
                </div>
            </div>
        </div>
    );
};

export default CollapseTaskContainer;
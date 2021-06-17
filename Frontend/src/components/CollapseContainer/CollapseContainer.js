import CollapseTaskContainer from "../CollapseTaskContainer/CollapseTaskContainer";
import CollapseInterviewContainer from "../CollapseInterviewContainer/CollapseInterviewContainer";
import CollapseQuizContainer from "../CollapseQuizContainer/CollapseQuizContainer";
import CollapseFurtherReading from "../CollapseFurtherReading/CollapseFurtherReading";

const CollapseContainer = (props) => {
    return (
        <div className="accordion" id="accordionExample">
            <CollapseTaskContainer
                taskQuestion="This is the task question"
                taskSolution="This is the solution of the task question."
            />
            <CollapseQuizContainer quizQuestion="This is the quiz question" />
            <CollapseInterviewContainer
                interviewQuestion="This is the interview question"
                interviewAnswer="This is the answer of the interview question"
            />
            <CollapseFurtherReading />
        </div>
    );
};

export default CollapseContainer;

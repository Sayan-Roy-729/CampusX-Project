const DropdownSelect = (props) => {
    return (
        <select className="form-control" onChange = {props.onChange}>
            <option selected disabled hidden>
                {props.default}
            </option>
            {/* If have to select for videos */}
            {props.videos && props.videos.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.title}
                </option>
            ))}
            {/* If have to select for quizzes */}
            {props.quizzes && props.quizzes.map(item => (
                <option key = {item.id} value = {item.id}>
                    {item.question}
                </option>
            ))}
            {/* If have to select the interview */}
            {props.interview && props.interview.map(item => (
                <option key = {item.id} value = {item.id}>
                    {item.question}
                </option>
            ))}
            {/* If have to select the further reading */}
            {props.furtherReading && props.furtherReading.map(item => (
                <option key = {item.id} value = {item.id}>
                    {item.title}
                </option>
            ))}
        </select>
    );
};

export default DropdownSelect;

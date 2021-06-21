const UpdateSelectOptions = props => {
    return (
        <select className="form-control" onChange = {props.onChange}>
            <option selected disabled hidden>Choose...</option>
            {
                (props.selectedVideoId && props.purpose === 'update') && (
                    <>
                    <option value = '1'>Update or Upload Task</option>
                    <option value = '2'>Upload Quiz and Options</option>
                    <option value = '3'>Upload Interview Question</option>
                    <option value = '4'>Upload Further Reading Content</option>
                    <option value = '5'>Update Quiz and Options</option>
                    <option value = '6'>Update a Interview Question</option>
                    <option value = '7'>Update a Further Reading Content</option>
                    </>
                )
            }
            {
                (props.selectedVideoId && props.purpose === 'delete') && (
                    <>
                    <option value = '1'>Delete Task</option>
                    <option value = '2'>Delete Quiz</option>
                    <option value = '3'>Delete Interview</option>
                    <option value = '4'>Delete Further Reading</option>
                    </>
                )
            }
        </select>
    );
};

export default UpdateSelectOptions;
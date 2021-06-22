import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FormRadioButton from '../FormRadioButton/FormRadioButton';

const CollapseQuizContainer = props => {
    const [userSelected, setUserSelected] = useState([]);
    const quizzes = useSelector(state => state.video.quizzes);

    // Check the answers user submitted
    const quizFormHandler = event => {
        event.preventDefault();
        for(let index = 0; index < quizzes.length; index++) {
            const rightOption = quizzes[index].right;
            if (userSelected[index] !== rightOption.toString()) {
                alert(`You mistake the question number ${index + 1}`);
                return;
            }
        }
        alert('All answers are correct');
    };

    // Create default non-valid answers for the every quiz question
    useEffect(() => {
        let options = [];
        for(let index = 0; index < quizzes.length; index++) {
            options.push('0');
        }
        setUserSelected(options);
    }, [quizzes]);

    return (
        <div className="card">
            <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                    <button className="btn btn-block text-middle collapsed" type="button" data-toggle="collapse" data-target="#quiz-section" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Quiz</strong>
                    </button>
                </h2>
            </div>
            <div id="quiz-section" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                <form onSubmit = {quizFormHandler} className = "py-4">
                    {
                        quizzes.length > 0 ? quizzes.map((quiz, index) => (
                            <fieldset
                                className="form-group row"
                                key = {index}
                                onChange={event => setUserSelected(currentState => {
                                    currentState[index] = event.target.value;
                                    return currentState;
                                })}
                            >
                                <legend className="col-form-label col-sm-4 float-sm-left pt-0">
                                    {quiz.question}
                                </legend>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <FormRadioButton checkboxValue={quiz.option1} optionValue='1' name = {`${quiz.id}`}/>
                                        </div>

                                        <div className="col-sm-6">
                                            <FormRadioButton checkboxValue={quiz.option2} optionValue='2' name = {`${quiz.id}`}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <FormRadioButton checkboxValue={quiz.option3} optionValue='3' name = {`${quiz.id}`}/>
                                        </div>

                                        <div className="col-sm-6">
                                            <FormRadioButton checkboxValue={quiz.option4} optionValue='4' name = {`${quiz.id}`}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        )) : (
                            <h4 className = "text-muted text-center">There is no quiz related to this video</h4>
                        )
                    }
                        <button type='submit' className = "btn bg-dark float-right text-white" disabled= {quizzes.length > 0 ? false : true}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CollapseQuizContainer;
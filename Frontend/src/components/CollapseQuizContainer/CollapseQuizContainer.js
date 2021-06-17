import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FormRadioButton from '../FormRadioButton/FormRadioButton';

const CollapseQuizContainer = props => {
    const [userSelected, setUserSelected] = useState([]);
    const quizzes = useSelector(state => state.video.quizzes);

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

    useEffect(() => {
        let options = [];
        for(let index = 0; index < quizzes.length; index++) {
            options.push('0');
        }
        setUserSelected(options);
    }, [quizzes]);

    // const quizOptionChooseHandler = event => {
    //     alert(event.target.value);
    // }

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
                        quizzes.length > 0 && quizzes.map((quiz, index) => (
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
                                            <FormRadioButton checkboxValue="Option 1" optionValue='1'/>
                                        </div>

                                        <div className="col-sm-6">
                                            <FormRadioButton checkboxValue="Option 2" optionValue='2'/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <FormRadioButton checkboxValue="Option 3" optionValue='3'/>
                                        </div>

                                        <div className="col-sm-6">
                                            <FormRadioButton checkboxValue="Option 4" optionValue='4'/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        ))
                    }
                        <button type='submit' className = "btn bg-dark float-right text-white">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CollapseQuizContainer;
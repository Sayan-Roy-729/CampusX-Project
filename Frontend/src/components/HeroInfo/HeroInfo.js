import { Link } from "react-router-dom";

import "./HeroInfo.css";

const HeroInfo = (props) => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Machine Learning</h1>
            <p className="lead">
                Robots are not going to replace humans, they are going to make
                their jobs much more humane. Difficult, demeaning, demanding,
                dangerous, dull – these are the jobs robots will be taking.{" "}
                <span className="heroInfo__speaker">
                    Sabine Hauert, Co-founder of Robohub.org
                </span>
            </p>
            <hr className="my-4" />
            <Link className="btn btn-dark btn-lg" to="/videos" role="button">
                Gets Start
            </Link>
        </div>
    );
};

export default HeroInfo;

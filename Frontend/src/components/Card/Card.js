import { Link } from 'react-router-dom';

import './Card.css';

const Card = props => {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                {
                    props.linkName && (
                        <Link to={props.link} className="btn btn-dark btn-block">{props.linkName}</Link>
                    )
                }
            </div>
        </div>
    )
};

export default Card;
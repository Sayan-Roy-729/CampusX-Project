import './HeroInfo.css';

const HeroInfo = props => {
    return (
        <div className="heroInfo__container">
            <div className="heroInfo__main">
                <h1 className="font-weight-bold heroInfo__title">WELCOME</h1>
                <h4 className="heroInfo__quote">Computers are able to see, hear and learn. <br></br> Welcome to the future.</h4>
            </div>
        </div>
    );
};

export default HeroInfo;
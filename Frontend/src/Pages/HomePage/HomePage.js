import { useSelector } from "react-redux";

import HeroInfo from "../../components/HeroInfo/HeroInfo";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Card from "../../components/Card/Card";

const HomePage = (props) => {
    const authState = useSelector((state) => state.auth);
    const videoState = useSelector((state) => state.video);

    if (authState.loading || videoState.loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <HeroInfo />
            <div className="container" style={{marginBottom: '80px'}}>
                <h2 className = "text-center">Our Features</h2>
                <div className="row my-4">
                    <div className="col-md-4">
                        <Card
                            imageUrl="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                            title="Test Your Knowledge"
                            description="Very single video has the video related task. Watch the video and then test your knowledge."
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            imageUrl = "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            title="Interactive Quiz"
                            description="Want to test your knowledge more? For that solve the quizzes without any mistake."
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            imageUrl = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            title="Interview Questions"
                            description="Want to prepare for job? We also help will with some interview related questions and answers."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

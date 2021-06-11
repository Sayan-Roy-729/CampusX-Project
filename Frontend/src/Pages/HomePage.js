import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroInfo from "../components/HeroInfo/HeroInfo";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { getVideos } from "../store/actions/videoActions";

const HomePage = (props) => {
    const authState = useSelector(state => state.auth);
    const videoState = useSelector(state => state.video);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideos());
    }, [dispatch]);

    if (authState.loading || videoState.loading) {
        return (
            <LoadingSpinner />
        );
    }

    return <HeroInfo />;
};

export default HomePage;

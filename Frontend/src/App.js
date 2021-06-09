import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import HomePage from './Pages/HomePage';
import VideoPage from './Pages/VideoPage';
import { currentSignInUser } from './store/actions/authActions';
import { getVideos } from './store/actions/videoActions';

import './App.css';

function App() {
    const authState = useSelector(state => state.auth);
    const videoState = useSelector(state => state.video);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(currentSignInUser());
        dispatch(getVideos());
    }, [dispatch]);

    if (authState.loading || videoState.loading) {
        return (
            <div className = "loading__container">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <Switch>
                <Route path = '/' exact component = {HomePage}/>
                <Route path = '/videos/:id' component = {VideoPage} />
            </Switch>
        </>
    );
}

export default App;

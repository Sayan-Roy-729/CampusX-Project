import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import VideoPage from './Pages/VideoPage';
import AdminPage from './Pages/AdminPage';
import { currentSignInUser } from './store/actions/authActions';

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(currentSignInUser());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <Switch>
                <Route path = '/' exact component = {HomePage}/>
                <Route path = '/videos' component = {VideoPage} />
                <Route path = '/admin/add' component = { AdminPage }/>
            </Switch>
        </>
    );
}

export default App;

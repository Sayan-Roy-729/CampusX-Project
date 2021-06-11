import { useSelector } from 'react-redux'

import AdminForm from '../components/AdminForm/AdminForm';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const AdminPage = props => {
    const videoState = useSelector(state => state.video);

    if (videoState.loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="container mt-5 mb-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '20px', padding: '20px'}}>
            <div className = "row">
                <div className = "col-md-12">
                    <AdminForm />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
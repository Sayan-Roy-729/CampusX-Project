import AdminForm from '../components/AdminForm/AdminForm';

const AdminPage = props => {
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
import Card from "../../components/Card/Card";

import './AdminPage.css';

const AdminPage = (props) => {
    return (
        <div className="container">
            <div className="row my-3 admin__main__page">
                <div className="col-md-4">
                    <Card
                        imageUrl="https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
                        title="Add Video"
                        description="Upload a video and the contents related to this video."
                        linkName = "Add Video"
                        link = "/admin/add"
                    />
                </div>
                <div className="col-md-4">
                    <Card
                        imageUrl="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        title="Update Video"
                        description = "Update the video or the contents of a specific video."
                        linkName = "Update Video"
                        link = "/admin/update"
                    />
                </div>
                <div className="col-md-4">
                    <Card
                        imageUrl="https://images.unsplash.com/photo-1605918321412-d6504db4748e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        title="Delete Video"
                        description="Delete a video. It will automatically delete the contents related to this video."
                        linkName = 'Delete Video'
                        link = "/admin/delete"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function PostDetails() {
const { id } = useParams();
const [post, setPost] = useState(null);
const navigate = useNavigate();


useEffect(() => {
axios.get(`http://localhost:5000/posts/${id}`)
.then(res => setPost(res.data))
.catch(err => console.log(err));
}, [id]);


const handleDelete = () => {
if(window.confirm("Are you sure you want to delete this post?")) {
axios.delete(`http://localhost:5000/posts/${id}`)
.then(() => navigate('/'))
.catch(err => console.log(err));
}
};


if (!post) return <p>Loading post details...</p>;


return (
<div className="container">
<div className="card mt-4">
<div className="card-body">
<h2 className="card-title">{post.title}</h2>
<p className="card-text">{post.content}</p>
<button className="btn btn-danger me-2" onClick={handleDelete}>Delete Post</button>
<Link className="btn btn-warning" to={`/edit/${post.id}`}>Edit Post</Link>
<Link className="btn btn-secondary ms-2" to="/">Back to Home</Link>
</div>
</div>
</div>
);
}


export default PostDetails;
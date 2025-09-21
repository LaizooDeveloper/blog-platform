import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';


function EditPost() {
const { id } = useParams();
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const navigate = useNavigate();


useEffect(() => {
axios.get(`http://localhost:5000/posts/${id}`)
.then(res => {
setTitle(res.data.title);
setContent(res.data.content);
})
.catch(err => console.log(err));
}, [id]);


const handleSubmit = (e) => {
e.preventDefault();
axios.put(`http://localhost:5000/posts/${id}`, { title, content })
.then(() => navigate(`/post/${id}`))
.catch(err => console.log(err));
};


return (
<div className="container">
<h2 className="mb-4">Edit Post</h2>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label className="form-label">Title</label>
<input
type="text"
className="form-control"
value={title}
onChange={e => setTitle(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label className="form-label">Content</label>
<textarea
className="form-control"
rows="5"
value={content}
onChange={e => setContent(e.target.value)}
required
></textarea>
</div>
<button type="submit" className="btn btn-success">Update Post</button>
<Link className="btn btn-secondary ms-2" to={`/post/${id}`}>Back</Link>
</form>
</div>
);
}


export default EditPost;
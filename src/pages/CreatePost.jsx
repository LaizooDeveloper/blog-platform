import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


function CreatePost() {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const navigate = useNavigate();


const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:5000/posts', { title, content })
    .then(() => navigate('/'))  
    .catch(err => console.log(err));
};



return (
<div className="container">
<h2 className="mb-4">Create New Post</h2>
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
<button type="submit" className="btn btn-primary">Add Post</button>
<Link className="btn btn-secondary ms-2" to="/">Back to Home</Link>
</form>
</div>
);
}


export default CreatePost;
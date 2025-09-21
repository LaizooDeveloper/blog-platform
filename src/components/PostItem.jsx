import { Link } from 'react-router-dom';


function PostItem({ post }) {
return (
<div className="card mb-3">
<div className="card-body">
<h5 className="card-title">{post.title}</h5>
<p className="card-text">{post.content.substring(0, 100)}...</p>
<Link className="btn btn-sm btn-primary" to={`/post/${post.id}`}>Read More</Link>
</div>
</div>
);
}


export default PostItem;
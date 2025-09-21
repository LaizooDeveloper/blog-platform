import { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';


function PostList({ search }) {
const [posts, setPosts] = useState([]);


useEffect(() => {
axios.get('http://localhost:5000/posts')
.then(res => setPosts(res.data))
.catch(err => console.log(err));
}, []);


const filteredPosts = posts.filter(p => p.title.toLowerCase().includes((search || '').toLowerCase()));


if (!filteredPosts.length) return <p>Loading posts...</p>;


return (
<div>
{filteredPosts.map(post => <PostItem key={post.id} post={post} />)}
</div>
);
}


export default PostList;
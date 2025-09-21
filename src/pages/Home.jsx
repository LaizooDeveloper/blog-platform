import { useState } from 'react';
import PostList from '../components/PostList';


function Home() {
const [search, setSearch] = useState('');


return (
<div className="container mt-4">
<h1 className="mb-4">Blog Posts</h1>
<input
type="text"
className="form-control mb-3"
placeholder="Search posts..."
value={search}
onChange={e => setSearch(e.target.value)}
/>
<PostList search={search} />
</div>
);
}


export default Home;
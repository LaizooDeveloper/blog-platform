import { Link } from 'react-router-dom';


function Navbar() {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
<div className="container">
<Link className="navbar-brand" to="/">Blog Platform</Link>
<div>
<Link className="btn btn-outline-primary me-2" to="/">Home</Link>
<Link className="btn btn-primary" to="/create">Create Post</Link>
</div>
</div>
</nav>
);
}


export default Navbar;



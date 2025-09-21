function NotFound() {
return (
<div className="container mt-4">
<h2>404 - Page Not Found</h2>
<p>The page you are looking for does not exist.</p>
<Link className="btn btn-secondary mt-3" to="/">Back to Home</Link>
</div>
);
}


export default NotFound;
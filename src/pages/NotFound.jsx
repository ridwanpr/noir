import { Link } from "react-router";

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>The page you tried to access doesn't exist.</p>
    <Link to="/" className="text-blue-500">Click here to Go back to homepage</Link>
  </div>
);
export default NotFound;

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found maybe it does not exist. Please check again!</p>
            <Link to="/">Go back to homepage...</Link>
        </div>
     );
}

export default NotFound;

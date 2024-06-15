import '../styles/NotFoundPage.css';
import '../styles/Shared.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {

    return (
        <div className="not-found">
            <h2>The page does not exist :(</h2>
            <Link to="/">Main Page</Link>
        </div>
    )
}


export default NotFoundPage;

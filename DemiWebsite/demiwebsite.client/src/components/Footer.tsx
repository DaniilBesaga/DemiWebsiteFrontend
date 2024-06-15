import '../styles/Footer.css';
import '../styles/Shared.css';
import { Link } from 'react-router-dom';


function Footer() {


    return (
        <footer>
            <div className="footer-icons">
                <a href="instagram.com"><i className="ri-instagram-fill"></i></a>
                <a href="twitter.com"><i className="ri-twitter-line"></i></a>
            </div>
            <ul>
                <li><Link to="/siteusing">Use of the site</Link></li>
                <li><Link to="/policy">Privacy policy</Link></li>
                <li><Link to="/contact">Inquiry</Link></li>
            </ul>
        </footer>
    )
}



export default Footer;
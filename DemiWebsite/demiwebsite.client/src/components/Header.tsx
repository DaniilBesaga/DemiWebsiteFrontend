import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <a className="logo" href="/">
                <img src="https://profirealt.blob.core.windows.net/commerce/logodemi.webp" />
                <span>Demi.to</span>
            </a>
            <ul className="header-nav">
                <li><Link to="/company">Company</Link></li>
                <li><Link to="/works">Works</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/recruit">Recruit</Link></li>
                <li><Link to="/contact">Message</Link></li>
            </ul>
            <div className="header-langs">
                <span>укр</span>
                <span>|</span>
                <span>eng</span>
            </div>
            <div className="header-theme">
                <span className="light"></span>
                <span className="dark"></span>
            </div>
        </header>
    )
}

export default Header;
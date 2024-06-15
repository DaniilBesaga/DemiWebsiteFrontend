import { Link } from 'react-router-dom';
import '../styles/Instagram.css';
import '../styles/Shared.css';


function Instagram() {


    return (
        <div className="inst-container">
            <h2 className="h-red">instagram</h2>
            <div className="grid-5">
                <a href="https://www.instagram.com/nikaman.edits/"><img src="https://profirealt.blob.core.windows.net/commerce/vivi.jpg" /></a>
                <a href="https://www.instagram.com/nikaman.edits/"><img src="https://profirealt.blob.core.windows.net/commerce/vivi.jpg" /></a>
                <a href="https://www.instagram.com/nikaman.edits/"><img src="https://profirealt.blob.core.windows.net/commerce/vivi.jpg" /></a>
                <a href="https://www.instagram.com/nikaman.edits/"><img src="https://profirealt.blob.core.windows.net/commerce/vivi.jpg" /></a>
                <a href="https://www.instagram.com/nikaman.edits/"><img src="https://profirealt.blob.core.windows.net/commerce/vivi.jpg" /></a>
            </div>
            <div className="proceed-button">
                <Link to="https://www.instagram.com/nikaman.edits/">Follow</Link>
                <i className="ri-arrow-right-wide-line"></i>
            </div>
        </div>
    )
}



export default Instagram;
import '../styles/CompanyWelcome.css';
import '../styles/Shared.css';


function CompanyWelcome() {
    return (
        <div className="company-welcome-container">
            <h2 className="h-red">company</h2>
            <div className="company-welcome">
                <img src="https://profirealt.blob.core.windows.net/commerce/company.webp" />
                <div className="company-info">
                    <ul>
                        <li><span>Company name</span> <span>Demi Studio</span></li>
                        <li><span>Location</span> <span>Vishnive, Demi Studio</span></li>
                        <li><span>Date of foundation</span><span>2024.01.01</span></li>
                        <li><span>Representative</span><span>Pavlenko Vadik</span></li>
                        <li><span>Business Contents</span><span>Providing creative design solutions</span></li>
                        <li><span>URL</span><span><b>www.demistudio.com</b></span></li>
                        <li><span>Inquiry</span><span><a>info@demistudio.com</a></span></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}



export default CompanyWelcome;

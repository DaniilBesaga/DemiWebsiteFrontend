import Header from '../components/Header';
import Footer from '../components/Footer';
import RecruitItem from '../components/RecruitItem';
import '../styles/Recruit.css';

function Recruit() {
    
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red" style={{ fontSize: '2.25em' }}>recruit</h2>
                <div className="recruit-container grid-2">
                    <RecruitItem url="https://profirealt.blob.core.windows.net/commerce/recruit/recruit1.jpg" />
                    <RecruitItem url="https://profirealt.blob.core.windows.net/commerce/recruit/recruit2.jpg" />
                    <RecruitItem url="https://profirealt.blob.core.windows.net/commerce/recruit/recruit6.webp" />
                    <RecruitItem url="https://profirealt.blob.core.windows.net/commerce/recruit/recruit4.webp" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Recruit;
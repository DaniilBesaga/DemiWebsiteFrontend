import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsPreview from '../components/NewsPreview';
import MonthlyArchive from '../components/MonthlyArchive';
import ButtonsList from '../components/ButtonsList';

function News() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red">{window.location.href.includes("0") ? 'news list:' +
                    window.location.pathname.split('/')[2] : 'news list'}</h2>
                <NewsPreview />
                <MonthlyArchive />
            </div>
            <ButtonsList/>
            <Footer />
        </div>
    )
}

export default News;
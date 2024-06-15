import Header from '../components/Header';
import Footer from '../components/Footer';
import MonthlyArchive from '../components/MonthlyArchive';
import NewsInfo from '../components/NewsInfo';

function NewsItem() {
    return (
        <div>
            <Header />
            <div className="news-item container">
                <h2 className="h-red">news</h2>
                <MonthlyArchive />
                <NewsInfo/>
            </div>
            <Footer />
        </div>
    )
}

export default NewsItem;
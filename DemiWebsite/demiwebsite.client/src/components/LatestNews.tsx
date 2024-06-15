import { Link } from 'react-router-dom';
import '../styles/LatestNews.css';
import '../styles/Shared.css';
import { useEffect, useState } from 'react';
import { NewsItem } from '../interfaces/Interfaces';


function LatestNews() {

    const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
    useEffect(() => {
        setTimeout(async () => {
            const response = await fetch('/api/news');
            const data = await response.json();
            setLatestNews(data);
        }, 1000);
    }, [])

    return (
        <div className="latest-news">
            <h2 className="h-red">latest news</h2>
            <div>
                {latestNews.map((item, key) => (
                    <Link to={"news/" + (key+1)} className="news" key={key}>
                        <p>{item.postDate?.toString().substring(0, 10)}</p>
                        <div>
                            <p style={{ color: 'red', fontSize: 23, fontWeight: 'bold' }}>{item.name}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="proceed-button">
                <Link to="/news">More</Link>
                <i className="ri-arrow-right-wide-line"></i>
            </div>
        </div>
    )
}

export default LatestNews;
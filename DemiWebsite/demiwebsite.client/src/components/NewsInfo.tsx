import '../styles/NewsInfo.css';
import '../styles/Shared.css';
import { NewsItem } from '../interfaces/Interfaces';
import { useEffect, useState } from 'react';

function NewsInfo() {

    const [news, setNews] = useState<NewsItem>(undefined!);
    const [ready, setReady] = useState(false);
    const [newsArray, setNewsArray] = useState<string[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("/api/news/" + window.location.href.charAt(window.location.href.length - 1));
            const data = await response.json();
            setNews(data);
            setReady(true);
            setNewsArray(data.description!.split("\r"));
        })();
    }, []);

    return (
        <div>
            {ready && <div className="news-info">
                <span className="news-date">{news.postDate?.toString().substring(0, 10)}</span>
                <h3>{news.name}</h3>
                {newsArray.map((item, key) => (
                    <p key={key}>{item}<br /><br /></p>
                ))}
                <img src={news.imgUrl} />
                <a href="/">Click here to become an animator</a>
            </div> }
        </div>
    )
}

export default NewsInfo;
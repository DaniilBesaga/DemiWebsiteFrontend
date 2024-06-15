import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/WorkItem.css';
import { IWorkItem } from '../interfaces/Interfaces';
import { useEffect, useState } from 'react';

function WorkItem() {
    const [work, setWork] = useState<IWorkItem>(undefined!);
    const [ready, setReady] = useState(false);
    const [worksArray, setWorksArray] = useState<string[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("/api/work/" + window.location.href.charAt(window.location.href.length - 1));
            const data = await response.json();
            data.trailerUrl = data.trailerUrl.replace("watch?", "embed/")
            setWork(data);
            setReady(true);
            setWorksArray(data.story!.split("\r"));
        })();
    }, []);
    
    return (
        <div>
            {ready && <div>

                <Header />
                <div className="container">
                    <h2 className="h-red" style={{ fontSize: '2.25em' }}>works</h2>
                    <div className="work-container">
                        <div className="work-visual">
                            <img src={work.imgUrl} />
                            <iframe src="https://www.youtube.com/embed/M7lc1UVf-VE" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen></iframe>
                        </div>
                        <div className="work-detail">
                            <div className="work-detail-meta">
                                <span>{work.releaseDate.toString().substring(0, 10)}</span>
                                <h2>{work.name}</h2>
                            </div>
                            <div className="work-detail-story">
                                <h5>Story</h5>
                                {worksArray.map((item, key) => (
                                    <p key={key}>{item.startsWith('*', 1) ? <b>{item}</b> : item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>}
        </div>
    )
}

export default WorkItem;
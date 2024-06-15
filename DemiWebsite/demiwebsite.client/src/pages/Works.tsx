import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkPreview from '../components/WorkPreview';
import '../styles/WorkPreview.css';
import { useEffect, useState } from 'react';
import { IWorkItemPreview } from '../interfaces/Interfaces';

function Works() {

    const [worksPreview, setWorksPreview] = useState<IWorkItemPreview[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/work');
            const data = await response.json();
            setWorksPreview(data);
        })();
    }, [])

    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red" style={{ fontSize: '2.25em' }}>works</h2>
                <div className="works-container">
                    {worksPreview.map((item, key) => (
                        <WorkPreview imgUrl={item.imgUrl} name={item.name}
                            releaseDate={item.releaseDate} id={item.id} key={key} />
                    ))}
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Works;
import '../styles/TrailersGrid.css';
import { IWorkItemPreview } from '../interfaces/Interfaces';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function TrailersGrid() {

    const [workPreview, setWorkPreview] = useState<IWorkItemPreview[]>([]);

    useEffect(() => {
        setTimeout(async () => {
            const response = await fetch('/api/work/preview');
            const data = await response.json();
            setWorkPreview(data);
        }, 1000);
    }, [])

    
    return (
        <div className="trailers-container">
            <div className="grid-6">
                {workPreview.map((item, key) => (
                    <Link key={key} to={"work/" + (key + 1)}>
                        <img src={item.imgUrl} />
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>
            <div className="grid-3">

                {tnames.map((item, key) => (
                    <a key={key}>
                        <img src={trailers[key]} alt={item} />
                        <p>{item}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

const trailers = ['https://profirealt.blob.core.windows.net/commerce/anime1.png',
    'https://profirealt.blob.core.windows.net/commerce/anime2.png',
    'https://profirealt.blob.core.windows.net/commerce/anime3.jpg']

const tnames = ['One Piece: Red', 'Code Geass: Alian', 'Hlebushek: New Adventure']

export default TrailersGrid;
import '../styles/WorkPreview.css';
import '../styles/Shared.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IWorkItemPreview } from '../interfaces/Interfaces';


function WorkPreview(work: IWorkItemPreview) {

    const [showList, setShowList] = useState(false);
    return (
        <Link to={"" + work.id} className="work-preview" onMouseEnter={() => setShowList(true)} onMouseLeave={() => setShowList(false)}>
            <img src={work.imgUrl} />
            <div className={showList ? 'show-title' : ''}>
                {work.name}
            </div>
            <h3>{work.name}</h3>
            <span>{work.releaseDate?.toString().substring(0, 10)}</span>
            
        </Link>
    )
}

export default WorkPreview;
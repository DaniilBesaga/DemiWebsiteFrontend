import { useState } from 'react';
import '../styles/MonthlyArchive.css';
import '../styles/Shared.css';

function MonthlyArchive() {

    const [showList, setShowList] = useState(false);
    const [changeMonth] = useState(0);
    const [showMonth] = useState(false);
    const year = new Date().getFullYear();

    return (
        <div>
            <span className={showMonth ? "url-title url-show" : "url-title"}>{window.location.hostname + `/news/${year}-0${changeMonth + 1}`}</span>
            <div className="archive">
                <h3 className="h-red">Monthly archive</h3>
                <div onClick={() => setShowList(!showList)}>
                    <span>2024</span>
                    <i className="ri-arrow-down-s-line"></i>
                </div>
                <ul className={showList ? 'show' : ''}>
                    {month.map((index, key) => (
                        key <= currentMonth ? <li key={key}><a href={`/news/${year}-0${key + 1}`}>{index} 2024</a></li> : null

                    ))}

                </ul>
            </div>
        </div>
    )
}

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentMonth = new Date().getMonth();

export default MonthlyArchive;

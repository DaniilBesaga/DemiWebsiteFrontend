import { useState } from 'react';
import '../styles/ButtonsList.css';
import '../styles/Shared.css';


function ButtonsList() {

    const [activeLink, setActiveLink] = useState(1);

   
    const path = window.location.pathname; 
    const parts = path.split('/');
    const pageNumber = parseInt(parts[parts.length - 1])
    const prevPath = path.replace(pageNumber.toString(), (pageNumber - 1).toString())
    const nextPath = path.replace(pageNumber.toString(), (pageNumber + 1).toString())

    return (
        <div className="buttons-list">
            <a href={prevPath}>prev</a>
            <a style={{ background: activeLink == 1 ? 'white' : '#f3f3f3' }} onClick={()=>setActiveLink(1)}>1</a>
            <a style={{ background: activeLink == 2 ? 'white' : '#f3f3f3' }} onClick={() => setActiveLink(2)}>2</a>
            <a style={{ background: activeLink == 3 ? 'white' : '#f3f3f3' }} onClick={() => setActiveLink(3)}>3</a>
            <a style={{ background: activeLink == 4 ? 'white' : '#f3f3f3' }} onClick={() => setActiveLink(4)}>4</a>
            <a style={{ background: activeLink == 5 ? 'white' : '#f3f3f3' }} onClick={() => setActiveLink(5)}>5</a>
            <a style={{ background: activeLink == 6 ? 'white' : '#f3f3f3' }} onClick={() => setActiveLink(6)}>6</a>
            <a href={nextPath}>next</a>
        </div>
    )
}

export default ButtonsList;

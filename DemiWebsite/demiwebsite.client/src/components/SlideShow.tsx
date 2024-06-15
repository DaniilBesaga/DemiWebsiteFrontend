import { useState } from 'react';
import '../styles/SlideShow.css';


function SlideShow() {

    const [slide, setSlide] = useState(1);

    const handleSlideChangeBack = () => {
        setSlide(slide - 1)
    }

    const handleSlideChangeForward = () => {
        setSlide(slide + 1)
    }

    const handleSlidesPanelClick = (num: number) => {
        setSlide(num)
    }

    return (
        <div className="slide-show">
            <i className="ri-arrow-left-fill" onClick={handleSlideChangeBack}
                style={{ display: slide == 1 ? 'none' : 'initial' }}></i>
            <div style={{ backgroundImage: `url(${imgs[slide - 1]})` }}>
                
            </div>
            <div className="slides-panel">
                <ul>
                    <li className={slide == 1 ? "li-active" : "li-unactive"}
                        onClick={() => handleSlidesPanelClick(1) }></li>
                    <li className={slide == 2 ? "li-active" : "li-unactive"}
                        onClick={() => handleSlidesPanelClick(2)}></li>
                    <li className={slide == 3 ? "li-active" : "li-unactive"}
                        onClick={() => handleSlidesPanelClick(3)}></li>
                    <li className={slide == 4 ? "li-active" : "li-unactive"}
                        onClick={() => handleSlidesPanelClick(4)}></li>
                    <li className={slide == 5 ? "li-active" : "li-unactive"}
                        onClick={() => handleSlidesPanelClick(5)}></li>
                </ul>
            </div>
            <i className="ri-arrow-right-fill" onClick={handleSlideChangeForward}
                style={{ display: slide == 5 ? 'none' : 'initial' }}></i>
        </div>
    )
}

const imgs = ['https://profirealt.blob.core.windows.net/commerce/anime1.png',
    'https://profirealt.blob.core.windows.net/commerce/anime2.png',
    'https://profirealt.blob.core.windows.net/commerce/anime3.jpg',
    'https://profirealt.blob.core.windows.net/commerce/anime4.jpg',
    'https://profirealt.blob.core.windows.net/commerce/anime5.webp']

export default SlideShow;
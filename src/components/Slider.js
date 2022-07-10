import React, { useState, useEffect } from 'react';

function Slides({ slides }) {
    const [currentTitle, setCurrentTitle] = useState();
    const [currentText, setCurrentText] = useState();
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setCurrentTitle(slides[index].title)
        setCurrentText(slides[index].text)
    }, [])

    const nextSlide = () => {
        setIndex(index + 1);
    }
    const previousSlide = () => {
        setIndex(index - 1);
    }
    const restart = () => {
        setIndex(0);
    }

    useEffect(() => {
        setCurrentTitle(slides[index].title)
        setCurrentText(slides[index].text)
    }, [index])

    return (
        <div>
            <header className="header"><h2><span className='green'>H<span className='logoTow'>H</span></span>Slideshow App</h2></header>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={index == 0 && 'true'}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={previousSlide} disabled={index == 0 && 'true'}>Prev</button> <button
                    data-testid="button-next" className="small newNext" onClick={nextSlide} disabled={index == slides.length - 1 && 'true'}>Next</button> </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentTitle}</h1>
                <p data-testid="text">{currentText}</p>
            </div>
        </div>
    );

}

export default Slides;
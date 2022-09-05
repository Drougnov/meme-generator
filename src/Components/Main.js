import React from 'react';
import memesData from './memesData';

export default function Main(){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/2fm6x.jpg',
        altText: 'Waiting Skeleton'
    })

    const [allMemes,setAllMemes] = React.useState(memesData);

    function getRandomMeme(){
        const memesArray = allMemes.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length);
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: memesArray[randomNumber].url,
            altText: memesArray[randomNumber].name
        }))
    }

    function handleClick(event){
        const {name,value}= event.target;
        setMeme(preveMemes=>({
            ...preveMemes,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="form__inputs">
                    <input 
                        type="text"
                        placeholder="Top text"
                        name='topText'
                        value={meme.topText}
                        onChange={handleClick} />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleClick} />
                </div>
                <button className="form__btn" onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt={meme.altText} className="meme__img" />
                <h2 className="meme__text meme__top-text">{meme.topText}</h2>
                <h2 className="meme__text meme__bottom-text">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
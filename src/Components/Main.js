import React from 'react';

export default function Main(){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/2fm6x.jpg',
        altText: 'Waiting Skeleton'
    })

    const [allMemes,setAllMemes] = React.useState([]);

    React.useState(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function getRandomMeme(){
        const randomNumber = Math.floor(Math.random()*allMemes.length);
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: allMemes[randomNumber].url,
            altText: allMemes[randomNumber].name
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
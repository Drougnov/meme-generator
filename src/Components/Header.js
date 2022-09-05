import logo from '../images/logo.png'

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="troll face" className='logo__img'/>
                <h1 className='logo__text'>Meme Generator</h1>
            </div>
            <span className="course">React Course - Project 3</span>
        </header>
    )
}
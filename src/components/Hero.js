import unity from '../img/unity.svg'
import tesla from '../img/tesla.svg'
import facebook from '../img/facebook.svg'
import './styles/hero.css';

function Hero(){

    return <div className="hero">
        <div className="hero-image">
            <p>Monetizing creativity.</p>
        </div>
        <div className="hero-sponsors">
            <img src={unity} />
            <img src={tesla} style={{width: "15%"}} />
            <img src={facebook} />
        </div>
    </div>
}

export default Hero
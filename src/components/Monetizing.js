import monetizingImg from '../img/working-vector.jpg' 
import './styles/monetizing.css'

function Monetizing(){

    return <div className="monetizing">
        <h2>Monetizing.</h2>
        <div className="monetizing-flex">
            <img src={monetizingImg} />
            <div className="monetizing-left">
                <p>Learn about how to start selling your creativity.</p>
                <button style={{margin: '2rem 10rem'}} className="btn-blue">Start selling</button>
            </div>
        </div>
    </div>
}

export default Monetizing
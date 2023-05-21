import "./front.scss";
import minecraft from '../public/minecraft.mp4'

function Front() {
    return (
        <div className="front">
            <video className="bgvid" src={minecraft} autoPlay loop muted />
            <img src="/Heading.png" alt="" className="heading" />
        </div>
    );
}

export default Front;

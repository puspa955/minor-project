import "./HeroStyles.css";
import FileUploader from "./FileUploader";

function Hero (props){
    return(
     <>
    <div className={props.cName}>
        <img alt="HeroImg" src={props.HeroImg}/>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <FileUploader />
            
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>

        </div>
    </div>
     </>
    );
 }
 
 export default Hero;
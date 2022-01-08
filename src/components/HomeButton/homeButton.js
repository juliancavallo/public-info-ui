import { Link } from "react-router-dom";
import './homeButton.css'

export const HomeButton = () => {

    return (
        <Link to="/" className="home-button" aria-label="Home button">
           <i className="fas fa-home"></i>
        </Link>
    );
}
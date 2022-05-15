
import classes from "/home/moh/travel/src/components/header/Header.css";
import logoImage from "/home/moh/travel/src/assets/logo3.png";
import Navbar from "../Navbar/Navbar";


function Header(){
    return(
        <header>
            <div className={classes.headerData}>
                <img src={logoImage} alt="logo" className={classes.img}/>
                <h1 className={classes.header}> Travel Destinations</h1>
            </div>
            <Navbar />
        </header>

    );
};

export default Header;

import classes from '/home/moh/travel/src/components/footer/Footer.css';
import facebook from "/home/moh/travel/src/assets/Facebook_logo.png";
import twitter from "/home/moh/travel/src/assets/icons8-twitter-480.png";
import linkedIn from "/home/moh/travel/src/assets/icons8-linkedin-circled-240.png";

function Footer(props) {
    
    return( 
        <footer className={classes.footer}>
            <h3>By Mohammad AbuMazen</h3>
            <div>
                <a href="https://www.facebook.com/mohammad.abumazen.54">
                   <img src={facebook}/> 
                </a>
                <a href="https://twitter.com/MohAbumazen">
                    <img src={twitter}/>
                </a>
                <a href="https://www.linkedin.com/in/mohammad-abumazen/">
                    <img src={linkedIn}/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
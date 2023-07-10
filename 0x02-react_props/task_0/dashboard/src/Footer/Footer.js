import './Footer.css';
import  { getFullYear, getFooterCopy }  from '../utils.js';


function Footer() {
    return (
    <footer className='App-footer'>
        <p>Copyright { getFullYear() } { getFooterCopy("True") }</p>
    </footer>
    );
}

export default Footer;
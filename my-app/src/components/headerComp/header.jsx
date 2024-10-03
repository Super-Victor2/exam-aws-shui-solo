import './header.css'
import HeaderImg from '../../assests/logoo.png'
import { Link } from 'react-router-dom';

function headerComp() {
    return (
        <Link to='/'><img className='header-logo' src={HeaderImg} alt="img" /> </Link>
        
    )
}

export default headerComp


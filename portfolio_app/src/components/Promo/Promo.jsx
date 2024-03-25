import { Link } from 'react-router-dom'
import './Promo.css'


function Promo() {
    return (
        <div className='container2'>
            <div className='large_text'>
                <p>Hi, I`m Erkebulan, I build things for the web. </p>
            </div>
            <div className='mini_text'>
                <p>I`m software developer and this is my portfolio.</p>
            </div>
            <div className='div_btn'>
            <Link to="/about">
                 <button className='btn_check'>Check out my CV</button>
            </Link>
            </div>
        </div>
    )

}

export default Promo
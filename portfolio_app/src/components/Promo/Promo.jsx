
import './Promo.css'
import { Link } from 'react-scroll'


function Promo() {
    return (
        <div id='promo' className='container2'>
            <div className='large_text'>
                <p>Hi, I`m Erkebulan, I build exceptional and accessible digital experiences for the web. </p>
            </div>
            <div className='mini_text'>
                <p>I`m software developer and this is my portfolio.</p>
            </div>
            <div className='div_btn'>
                 <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    >
                    <button className='btn_check'>Check out my CV</button>
                </Link>
            </div>
        </div>
    )

}

export default Promo
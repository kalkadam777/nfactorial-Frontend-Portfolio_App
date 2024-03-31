import './About.css'
import pointer from '../../assets/Pointer.svg'
import img4 from '../../assets/mac.png'


function About() {
    return (
        <div id='about' className='container_about'>
            <div className='left_content'>
                <div className='div_about'>
                    <p>About me</p>
                </div>
                <div className='text_about'>
                    <p>Hello, my name is Koyshybai Erkebulan and I am taking my first steps towards Frontend development profession.
I                       have mastered HTML, CSS, Js, React, Git, a little knowledge of Angular and I continue to improve my skills in these areas.
                     </p>
                </div>
                <div className='div_contain'>
                    <div className='div1'>
                        <div className='imgAndtext'>
                            <div>
                                <img src={pointer} alt="pointer" />
                            </div>
                            <div>
                                <p>HTML</p>
                            </div>
                        </div>
                        <div className='imgAndtext'>
                            <div>
                                <img src={pointer} alt="pointer" />
                            </div>
                            <div>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className='div1'>
                        <div className='imgAndtext'>
                            <div >
                                <img src={pointer} alt="pointer" />
                            </div>
                            <div>
                                <p>React</p>
                            </div>
                        </div>
                        <div className='imgAndtext'>
                            <div>
                                <img src={pointer} alt="pointer" />
                            </div>
                            <div>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='right_content'>
                <div>
                    <img className='img_me' src={img4} alt="" />
                </div>
            </div>
        </div>
    )

}

export default About
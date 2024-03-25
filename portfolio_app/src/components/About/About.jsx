import './About.css'
import pointer from '../../assets/Pointer.svg'
import img4 from '../../assets/image4.png'


function About() {
    return (
        <div className='container_about'>
            <div className='left_content'>
                <div className='div_about'>
                    <p>About me</p>
                </div>
                <div className='text_about'>
                    <p>I`m software developer and this is my portfolio.</p>
                    <p>I`m software developer and this is my portfolio. I`m software developer and this is my portfolio. I`m software developer and this is my portfolio.</p>
                </div>
                <div className='div_contain'>
                    <div className='div1'>
                        <div className='imgAndtext'>
                            <div>
                                <img src={pointer} alt="pointer" />
                            </div>
                            <div>
                                <p>Lorem Ipsum Description Text</p>
                            </div>
                        </div>
                        <div className='imgAndtext'>
                            <div>
                                <img src={pointer} alt="pointer" />
                            </div>
                            <div>
                                <p>Lorem Ipsum Description Text</p>
                            </div>
                        </div>
                    </div>

                    <div className='div1'>
                        <div className='imgAndtext'>
                            <div >
                                <img src={pointer} alt="pointer" />
                            </div>
                            <div>
                                <p>Lorem Ipsum Description Text</p>
                            </div>
                        </div>
                        <div className='imgAndtext'>
                            <div>
                                <img src={pointer} alt="pointer" />
                            </div>
                            <div>
                                <p>Lorem Ipsum Description Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='right_content'>
                <div>
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    )

}

export default About
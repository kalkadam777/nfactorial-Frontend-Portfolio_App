import './Project.css'
import first_img from '../../assets/prj_1.png'
import second_img from '../../assets/prj_2.png'
import pointer from '../../assets/Pointer.svg'


export default function Project(){
    return (
        <div>
            <div className='project_p'>
                <p>Projects I`ve Worked On</p>
            </div>
            <div className='about_project1'>
                <div>
                    <img src={first_img} alt="" />
                </div>
                <div className='right_cont'>
                    <div className='div_second'>
                        <div className='project_name'>Project Name</div>
                        <div className='project_about'><p>I’m software developer and this is my portfolio.
                                    I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                        </div>
                    </div>
                    <div className='divka1'>
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
                </div>
            </div>
            <div className='about_project2'>
                <div className='right_cont'>
                    <div className='div_second'>
                        <div className='project_name'>Project Name</div>
                        <div className='project_about'><p>I’m software developer and this is my portfolio.
                                    I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                        </div>
                    </div>
                    <div className='divka1'>
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
                </div>

                <div>
                    <img src={second_img} alt="" />
                </div>
            </div>
        </div>
    )
}
import './Experience.css'
import pointer2 from '../../assets/Pointer2.svg'


function Experience() {
    return (
        <div id='experience' className='container_exp'>
            <div className='MainD'>
                <p>Experience</p>
            </div>

            <div className='div_his'>
                <div className='first'>
                    <div className='date_d'>
                        <p>2023-2024</p>
                    </div>

                    <div className='about_d'>
                        <div className='nameAndImg'>
                            <div className='cityComp'>
                                <div>
                                    <img src={pointer2} alt="" />
                                </div>
                                <div className='companyName'>
                                    <p>Nfactorial</p>
                                </div>
                            </div>
                            <div className='city'>Almaty · Nfactorial</div>
                        </div>
                        <div className='about_work'>
                            <p>Completed Nfactorial Start course in java programming language, also Nfactorial Frontend, mastered JavaScript, HTML, CSS, React framework. </p>
                        </div>
                    </div>
                </div>

                <div className='first'>
                    <div className='date_d'>
                        <p>2022-2023</p>
                    </div>

                    <div className='about_d'>
                        <div className='nameAndImg'>
                            <div className='cityComp'>
                                <div>
                                    <img src={pointer2} alt="" />
                                </div>
                                <div className='companyName'>
                                    <p>KnewIT</p>
                                </div>
                            </div>
                            <div className='city'>Almaty · KnewIT</div>
                        </div>
                        <div className='about_work'>
                            <p>I took a course about python and Django framework at KnewIT school on backend developer programming courses</p>
                        </div>
                    </div>
                </div>

                <div className='first'>
                    <div className='date_d'>
                        <p>2022</p>
                    </div>

                    <div className='about_d'>
                        <div className='nameAndImg'>
                            <div className='cityComp'>
                                <div>
                                    <img src={pointer2} alt="" />
                                </div>
                                <div className='companyName'>
                                    <p>Almaty · KnewIT</p>
                                </div>
                            </div>
                            <div className='city'>C++</div>
                        </div>
                        <div className='about_work'>
                            <p>Studied at the KnewIT school courses in C++ programming</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience
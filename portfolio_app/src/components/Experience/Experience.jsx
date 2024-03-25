import './Experience.css'
import pointer2 from '../../assets/Pointer2.svg'


function Experience() {
    return (
        <div className='container_exp'>
            <div className='MainD'>
                <p>Experience</p>
            </div>

            <div className='div_his'>
                <div className='first'>
                    <div className='date_d'>
                        <p>2021-2022</p>
                    </div>

                    <div className='about_d'>
                        <div className='nameAndImg'>
                            <div className='cityComp'>
                                <div>
                                    <img src={pointer2} alt="" />
                                </div>
                                <div className='companyName'>
                                    <p>The Role at the Company</p>
                                </div>
                            </div>
                            <div className='city'>Country, City</div>
                        </div>
                        <div className='about_work'>
                            <p>I’m software developer and this is my portfolio.
                            I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                        </div>
                    </div>
                </div>

                <div className='first'>
                    <div className='date_d'>
                        <p>2020-2019</p>
                    </div>

                    <div className='about_d'>
                        <div className='nameAndImg'>
                            <div className='cityComp'>
                                <div>
                                    <img src={pointer2} alt="" />
                                </div>
                                <div className='companyName'>
                                    <p>The Role at the Company</p>
                                </div>
                            </div>
                            <div className='city'>Country, City</div>
                        </div>
                        <div className='about_work'>
                            <p>I’m software developer and this is my portfolio.</p>
                        </div>
                    </div>
                </div>

                <div className='first'>
                    <div className='date_d'>
                        <p>2019</p>
                    </div>

                    <div className='about_d'>
                        <div className='nameAndImg'>
                            <div className='cityComp'>
                                <div>
                                    <img src={pointer2} alt="" />
                                </div>
                                <div className='companyName'>
                                    <p>The Role at the Company</p>
                                </div>
                            </div>
                            <div className='city'>Country, City</div>
                        </div>
                        <div className='about_work'>
                            <p>I’m software developer and this is my portfolio.
                            I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience
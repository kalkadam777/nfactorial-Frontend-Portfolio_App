import './Project.css'
import first_img from '../../assets/simple_html.png'
import second_img from '../../assets/medium.png'
import third_img from '../../assets/todo.png'
import pointer from '../../assets/Pointer.svg'


function Project(){
    return (
        <div id='project'>
            <div className='project_p'>
                <p>Projects I`ve Worked On</p>
            </div>
            <div className='about_project1'>
                <div >
                    <img className='project_img' src={first_img} alt="" />
                </div>
                <div className='right_cont'>
                    <div className='div_second'>
                        <div className='project_name'>JumysTap</div>
                        <div className='project_about'><p> A one-page site for junior developers gives you the opportunity to find
job vacancies and upload your CV.</p>
                        </div>
                    </div>
                    <ul className='tech-stack'>
                        <li className='skill'>HTML</li>
                        <li className='skill'>CSS</li>
                        <li className='skill'>JavaScript</li>
                    </ul>
                </div>
            </div>


            <div className='about_project2'>
                <div className='right_cont'>
                    <div className='div_second'>
                        <div className='project_name'>Media as Medium</div>
                        <div className='project_about'><p>A site for social journalism, where you can post your own articles and
view articles published by someone else</p>
                        </div>
                    </div>
                    <ul className='tech-stack'>
                        <li className='skill'>HTML</li>
                        <li className='skill'>CSS</li>
                        <li className='skill'>JavaScript</li>
                        <li className='skill'>React</li>
                    </ul>
                </div>

                <div>
                    <img className='project_img' src={second_img} alt="" />
                </div>
            </div>

            <div className='about_project1'>
                <div >
                    <img className='project_img' src={third_img} alt="" />
                </div>
                <div className='right_cont'>
                    <div className='div_second'>
                        <div className='project_name'>Simple To Do list</div>
                        <div className='project_about'><p>ToDo list, where you can add tasks, mark them as completed and delete them.</p>
                        </div>
                    </div>
                    <ul className='tech-stack'>
                        <li className='skill'>HTML</li>
                        <li className='skill'>CSS</li>
                        <li className='skill'>JavaScript</li>
                        <li className='skill'>React</li>
                        <li className='skill'>Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Project
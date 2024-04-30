import Education from './Education/Education'
import Experience from './Experience/Experience'
import './Resume.css'
import Skills from './Skills/Skills'
export default function Resume(){
    return(
        <>
        <div className='resume section' id='resume'>
        <h2 className='title'> 
            Resume
        </h2>
        
        <div className='container'>
            {/* <div className='nav'>
                <ul>
                    <li>
                        <a href="#">Education</a>
                        </li>
                    <li>
                        <a href="#">Experience</a>
                    </li>
                    <li>
                        <a href="#">Skill</a>
                    </li>
                </ul>
            </div> */}
            <div className='info'>
                <Education></Education>
                <Experience></Experience>
                <Skills></Skills>
            </div>
        </div>
        </div>
        </>
    )
}
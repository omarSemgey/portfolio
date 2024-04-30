import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMap, faPaperPlane, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import avatar from '../../images/about.jpg.webp'
import './Contact.css'
export default function Contact(){
    return(
        <>
        <div className='contact section' id='contact'> 
            <h2 className='title'>Contact Me</h2>
            <div className='container'>
                <div className='cards'>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <div className='icon-container bg-blue'>
                                <FontAwesomeIcon className='icon' icon={faMap}></FontAwesomeIcon>
                            </div>
                            <h3 className='card-title'>
                                Address
                            </h3>
                            <p className='text'>
                                198 West 21th Street, Suite 721 New York NY 10016
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <div className='icon-container bg-blue'>
                                <FontAwesomeIcon className='icon' icon={faPhoneAlt}></FontAwesomeIcon>
                            </div>
                            <h3 className='card-title'>
                                Contact Number
                            </h3>
                            <p className='text c=blue'>
                                + 1235 2355 98
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <div className='icon-container bg-blue'>
                                <FontAwesomeIcon className='icon' icon={faPaperPlane}></FontAwesomeIcon>
                            </div>
                            <h3 className='card-title'>
                                Address
                            </h3>
                            <a className='link c-blue'>
                                info@yoursite.com
                            </a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <div className='icon-container bg-blue'>
                                <FontAwesomeIcon className='icon' icon={faGlobe}></FontAwesomeIcon>
                            </div>
                            <h3 className='card-title'>
                                Address
                            </h3>
                            <a className='link'>
                                yoursite.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contact-info'>
                    <img src={avatar} alt="" />
                    <form className='form'>
                        <input type="text" placeholder='Your Name'/>
                        <input type="text" placeholder='Your Email'/>
                        <input type="text" placeholder='Subject'/>
                        <textarea placeholder='Message'></textarea>
                        <input type="submit" className='send bg-blue b-blue' value="Send Message"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
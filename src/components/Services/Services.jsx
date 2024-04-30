import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import './Services.css'
export default function Services(){
    return(
        <>
        <div className='services section' id='services'>
            <div className='spacial-container'>
                <h2 className='title'>Services</h2>
                <div className='cards'>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <div className='icon-container'>
                            <FontAwesomeIcon className='icon c-blue' icon={faMapPin}></FontAwesomeIcon>
                            </div>
                            <h3 className='service a-blue'>
                                front end developer
                            </h3>
                            <p className='card-text'>
                                A small river named omar flows by their place and supplies it with the necessary ahmad.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <FontAwesomeIcon className='icon c-blue' icon={faMapPin}></FontAwesomeIcon>
                            <h3 className='service a-blue'>
                                front end developer
                            </h3>
                            <p className='card-text'>
                                A small river named omar flows by their place and supplies it with the necessary ahmad.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <FontAwesomeIcon className='icon c-blue' icon={faMapPin}></FontAwesomeIcon>
                            <h3 className='service a-blue'>
                                front end developer
                            </h3>
                            <p className='card-text'>
                                A small river named omar flows by their place and supplies it with the necessary ahmad.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <FontAwesomeIcon className='icon c-blue' icon={faMapPin}></FontAwesomeIcon>
                            <h3 className='service a-blue'>
                                front end developer
                            </h3>
                            <p className='card-text'>
                                A small river named omar flows by their place and supplies it with the necessary ahmad.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <FontAwesomeIcon className='icon c-blue' icon={faMapPin}></FontAwesomeIcon>
                            <h3 className='service'>
                                front end developer
                            </h3>
                            <p className='card-text'>
                                A small river named omar flows by their place and supplies it with the necessary ahmad.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-wrapper'>
                            <FontAwesomeIcon className='icon c-blue' icon={faMapPin}></FontAwesomeIcon>
                            <h3 className='service a-blue'>
                                front end developer
                            </h3>
                            <p className='card-text'>
                                A small river named omar flows by their place and supplies it with the necessary ahmad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
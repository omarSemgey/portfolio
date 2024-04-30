import './Items.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons'
export default function Items(){
    return(
        <>
            <div className='items'>
                <div className='item'>
                    <div className='icon-wrapper bg-blue'>
                        <FontAwesomeIcon className='icon' icon={faBookAtlas}></FontAwesomeIcon>
                    </div>
                    <div className='text'>
                        <span className='date c-blue'>2014-2015</span>
                        <h2>
                            Bachelor of Science in Computer Science
                        </h2>
                        <span className='position'>
                            Cambridge University
                        </span>
                        <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon-wrapper bg-blue'>
                        <FontAwesomeIcon className='icon' icon={faBookAtlas}></FontAwesomeIcon>
                    </div>
                    <div className='text'>
                        <span className='date c-blue'>2014-2015</span>
                        <h2>
                            Bachelor of Science in Computer Science
                        </h2>
                        <span className='position'>
                            Cambridge University
                        </span>
                        <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon-wrapper bg-blue'>
                        <FontAwesomeIcon className='icon' icon={faBookAtlas}></FontAwesomeIcon>
                    </div>
                    <div className='text'>
                        <span className='date c-blue'>2014-2015</span>
                        <h2>
                            Bachelor of Science in Computer Science
                        </h2>
                        <span className='position'>
                            Cambridge University
                        </span>
                        <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
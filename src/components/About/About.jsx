import './About.css'
export default function About(){
    return(
        <>
        <div className='about section' id='about'>
            <div className='container'>
            <div className='avatar'></div>
            <div className='about-text'>
                <div className='text-content'>
                <h2 className='title'>About Me</h2>
                <p>
                </p>
                <ul className='about-information'>
                    <li className='info'>
                        <span className='info-category'>
                            Name:
                        </span>
                        <span className='info-text'>
                            Ronaldo Fredrickson
                        </span>
                        </li>
                    <li className='info'>
                        <span className='info-category'>
                            Date of birth:
                        </span>
                        <span className='info-text'>
                            November 28, 1989
                        </span>
                    </li>
                    <li className='info'>
                        <span className='info-category'>
                            Address:
                        </span>
                        <span className='info-text'> 
                            San Francisco CA 97987 USA
                        </span>
                    </li>
                    <li className='info'>
                        <span className='info-category'>
                            Email:
                        </span>
                        <span className='info-text'>
                            ronaldo@gmail.com
                        </span>
                    </li>
                    <li className='info'>
                        <span className='info-category'>
                            Phone:
                        </span>
                        <span className='info-text'>
                            +1-2234-5678-9-0
                        </span>
                    </li>
                </ul>
                <button className='download bg-blue b-blue'>
                DOWNLOAD CV
                </button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
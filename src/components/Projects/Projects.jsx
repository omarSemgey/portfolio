import './Projects.css'
import img1 from '../../images/work-1.jpg.webp'
import img2 from '../../images/work-2.jpg.webp'
import img3 from '../../images/work-3.jpg.webp'
import img4 from '../../images/work-4.jpg.webp'
import img5 from '../../images/work-5.jpg.webp'
import img6 from '../../images/work-6.jpg.webp'
export default function Projects(){
    return(
        <>
        <div className='projects section' id='projects'>
            <h2 className='title'>My Projects</h2>
            <div className='items'>
                <div className='item'>
                    <img src={img1} alt="" />
                    <a href='#' className='overlay bg-blue'>
                    <div className='text'>
                        <h3>
                            Branding & Illustration Design
                        </h3>
                        <span>
                            web design
                        </span>
                    </div>
                    </a>
                </div>
                <div className='item'>
                    <img src={img2} alt="" />
                    <a href='#' className='overlay bg-blue'>
                    <div className='text'>
                        <h3>
                            Branding & Illustration Design
                        </h3>
                        <span>
                            web design
                        </span>
                    </div>
                    </a>
                </div>
                <div className='item'>
                    <img src={img3} alt="" />
                    <a href='#' className='overlay bg-blue'>
                    <div className='text'>
                        <h3>
                            Branding & Illustration Design
                        </h3>
                        <span>
                            web design
                        </span>
                    </div>
                    </a>
                </div>
                <div className='item'>
                    <img src={img4} alt="" />
                    <a href='#' className='overlay bg-blue'>
                    <div className='text'>
                        <h3>
                            Branding & Illustration Design
                        </h3>
                        <span>
                            web design
                        </span>
                    </div>
                    </a>
                </div>
                <div className='item'>
                    <img src={img5} alt="" />
                    <a href='#' className='overlay bg-blue'>
                    <div className='text'>
                        <h3>
                            Branding & Illustration Design
                        </h3>
                        <span>
                            web design
                        </span>
                    </div>
                    </a>
                </div>
                <div className='item'>
                    <img src={img6} alt="" />
                    <a href='#' className='overlay bg-blue'>
                    <div className='text'>
                        <h3>
                            Branding & Illustration Design
                        </h3>
                        <span>
                            web design
                        </span>
                    </div>
                    </a>
                </div>
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='card-wrapper'>
                        <div className='text'>
                            <strong className='number c-blue'>
                                1,200
                            </strong>
                            <span className='card-title'>
                                Complete Projects
                        </span>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-wrapper'>
                        <div className='text'>
                            <strong className='number c-blue'>
                                1,200
                            </strong>
                            <span className='card-title'>
                                Happy Customers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
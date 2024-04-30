import { useRef } from 'react';
import './NavBar.css'
export default function NavBar() {
    // refs
    const menu=useRef(null);
    const navLinks=useRef(null);
    const navBar= useRef(null);
    const sections=document.getElementsByClassName('section');
    const links=document.getElementsByClassName('link');
    // drop down menu
    function handleMenu(){
        if(menu.current.classList.contains('active')){
            menu.current.classList.remove('active');
            navLinks.current.classList.remove('links-active');
        }else{
            menu.current.classList.add('active');
            navLinks.current.classList.add('links-active');
        }
    }
    //
    window.onscroll = function() {handleLinks(),sticky()};
    function handleLinks(){
        const linksArray=Array.from(links)
        const sectionsArray=Array.from(sections);
        let current = "";
        sectionsArray.forEach((section) => {
            if (pageYOffset >= section.offsetTop) {
                current = section.getAttribute("id");
            }
        });
        linksArray.forEach((link) => {
            link.classList.remove("c-blue");
            if(link.classList.contains(current)) {
                link.classList.add("c-blue");
            }
        });
    }
    // sticky navbar
    function sticky(){
        if (window.pageYOffset > navBar.current.offsetTop) {
            navBar.current.classList.add("sticky");
        } else {
            navBar.current.classList.remove("sticky");
        }
    }
    return(
        <>
        <nav ref={navBar} className="nav-bar">
            <div className='container'>
                <h1 className='brand'>Portfolio</h1>
                <div className='links' ref={navLinks}>
                    <ul>
                        <li className='b-blue'>
                            <a href="#" className='hero link b-blue'>Home</a>
                        </li>
                        <li className='b-blue'>
                            <a href="#" className='about link b-blue'>About</a>
                        </li>
                        <li className='b-blue'>
                            <a href="#" className='resume link b-blue'>Resume</a>
                        </li>
                        <li className='b-blue'>
                            <a href="#" className='services link b-blue'>Services</a>
                        </li>
                        <li className='b-blue'>
                            <a href="#" className='projects link b-blue'>Projects</a>
                        </li>
                        <li className='b-blue'>
                            <a href="#" className='contact link b-blue'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="drop-down" onClick={handleMenu}>
                    <span className="menu" ref={menu}>menu</span>
                </div>
            </div>
        </nav>
        </>
    )
}
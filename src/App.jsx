import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Services from "./components/Services/Services";
function App() {
  const [theme,setTheme]=useState(localStorage.getItem('theme') || 'blue');
    useEffect(()=>{
      localStorage.setItem('theme',theme)
    },[theme])
  return (
    <>
    {/* <button onClick={() =>{
      setTheme('blue')}
    }>blue</button>
    <button onClick={() =>{
      setTheme('red')}
    }>red</button>
    <button onClick={() =>{
      setTheme('black')}
    }>black</button> */}
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};
export default App;

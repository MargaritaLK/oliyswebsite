import Header from '../components/Header';
import '../components/basic-styling.css';
import './About.css';


function About() {
  return (
    <div>
      <Header />
      <div className='container'>
        <AboutText />
      </div>

    </div>
  )
}


function AboutText() {
  return (
    <div>
      <div className='abouttext'>
        This webpages will be a
        collection of my tests with visuals, playing around, code challenges.
        <div className='info'>
          <span className='apestaartje-small'>@</span>
          <a id='linkstyle-italic' href="https://twitter.com/oliysart" target="_blank">
            oliysart</a>
        </div>


      </div>
    </div>

  )
}


export default About

import Header from '../../components/Header';
import '../../components/basic-styling.css';
import Sketch from './CalmingStarsSketch'



function calmingStars() {
  return (
    <div>
      <div className='header-nutral'>
        <Header />
      </div>

      <div className='calm-sketch-background'>
        <div className='calingstars-sketch-container'>
          {/* <Sketch/> */}
        </div>
      </div>



    </div>
  );
}



export default calmingStars

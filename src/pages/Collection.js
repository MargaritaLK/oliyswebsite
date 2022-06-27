import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Collection.css';


function Collection() {
  return (
    <div>
      <Header />
      <ListCollection />
    </div>
  );
}



function ListCollection () {
  return (
    <div className='container'>

    <div className='list-collection'>

      <div className='list-collection-item'>
        <Link id='linkstyle' to='./calmingStarts'>calming stars</Link>
      </div>

    </div>


    </div>
  )
}






export default Collection

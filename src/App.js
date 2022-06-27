import './App.css';
import './components/basic-styling.css';
import Header from './components/Header';




function App() {
  return (
    <div className="App">
      <Header/>
      <div className='maintitle-container'>
        <div className="maintitle">.oliys. </div>
        <div>
          <span className='apestaartje'>@</span>
          <a className='subtitle' id='linkstyle' href="https://twitter.com/oliysart" target="_blank">oliysart</a>
        </div>

      </div>
    </div>
  );
}





export default App;

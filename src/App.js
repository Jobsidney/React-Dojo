import logo from './logo.svg';
import NavBar from './navBar'
import Home from './home'

function App() {
  const title='JOB SIDNEY'
  const likes=50;
  return (
    <div className="App">
      <NavBar />
      <Home />
      <div className="content">
        <h1>hello jovan</h1>
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <p>Hello job</p>
        
      </div>

    </div>
  );
}

export default App;
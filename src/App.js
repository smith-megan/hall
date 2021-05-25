import './styles/app.css';
import Intro from './components/intro';
import Nav from './components/nav';
import Bio from './components/bio';
import Training from './components/training';
import Contact from './components/contact';
import Foot from './components/foot';
import Blog from './components/blog';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Hall">
      <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Nav />
        <Route exact path='/'>
        <Intro />
        </Route>

        <Route exact path='/bio'>
        <Bio/>
        </Route>
        
        <Route exact path='/training'>
        <Training/>
        </Route>
        
        <Route exact path='/blog'>
        <Blog/>
        </Route>

        <Route exact path='/contact'>
        <Contact/>
        </Route>
        <Foot/>
      </Router>
    </div>
  );
}

export default App;

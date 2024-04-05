import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Detailpage from './components/detailpage/Detailpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Homepage} />
        <Route path="/articles/:id" component={Detailpage} />
      </Routes>
    </Router>
  );
};

export default App;

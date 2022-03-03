import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';
import PostComment from './components/PostComment/PostComment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'><Home/></Route>
        <Route exact path='/'><Home/></Route>
        <Route path={'/comment/:postId'}><PostComment/></Route>

        <Route path={'/details/:id'}><PostDetails/></Route>
        <Route path='*'><NotFound/></Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import TodoApp from './components/todolist/TodoApp';
import Text from './components/typography/Text';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./css/App.css";
import Nav from './components/nav/Nav';
import Shop from './components/shop/Shop';
import useContext from './components/Usecontext/useContext';
function App() {
  return (
    <Router>
      <Nav />
      {/* <Content /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/text" component={Text} />
        <Route path="/todo" component={TodoApp} />
        <Route path="/shop" component={Shop} />
        <Route path="/context" component={useContext} />
        <Text />
      </Switch>
    </Router>
  )

}
const Home = () => {
  return (
    <div className="home">
      <h1>This is Home Page</h1>
    </div>
  )
}
export default App;

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Addresses from '../Addresses/Addresses';
import UsersDetails from '../UsersDetails/UsersDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);

  async function fetchData() {
      let url = 'https://randomuser.me/api/?seed=dudh0004&format=json&nat=au,ca,nz,gb,us&results=32';
      let resp = await fetch(url);
      let data = await resp.json();
      
      return setList(data.results); 
  
  }

  useEffect(() => {
      console.log('useEffect was called.');
      fetchData();
  }, []); 


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
      <Switch>
          <Route path="/users" exact>
            <Users result = {list} />
          </Route>
          <Route path="/users/:id">
            <UsersDetails result = {list} />
          </Route>
          <Route path="/addresses">
            <Addresses result = {list} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to = "/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;

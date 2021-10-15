import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css';
import '../Users/users.css';

export default function Users(props) {
    const [list, setList] = useState([]);

    async function fetchData() {
        let url = 'https://randomuser.me/api/?seed=dudh0004&nat=au,ca,nz,gb,us&results=32';
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results); 
        console.log(data);
    
    }

    // function findUser(id) {
    //     return list.find((item, index) => parseInt(id) === index + 1);
    //     //return an object for the single planet
    //   }

    useEffect(() => {
        console.log('useEffect was called.');
        fetchData();
    }, []); 
    
    return (
        <div className="users">
            {list.map((item, index) => (
                <div className="users-list" key={item.login.uuid}>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator image" src={item.picture.large} />
                        </div>
                        <div className="card-content">
                        <span className="card-title grey-text text-darken-4">{item.name.first}    {item.name.last}</span>
                        <p className="detail blue-text text-darken-4">{item.email}</p>
                        <p className="detail grey-text text-darken-4">{item.cell}</p>
                        <NavLink to={`/users/${index+1}`} className="activator moreInfo">More Info</NavLink>
                        </div>
                        <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{item.name.first}    {item.name.last}<i className="material-icons right">close</i></span>
                        <img className="activator image" src={item.picture.large} />

                        <span className="card-title userDetail grey-text text-darken-4">Address:</span>
                        <span className="card-title userDetail grey-text text-darken-4">{item.location.street.number}  {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.postcode}</span>
                        <p></p>


                        <span className="card-title userDetail grey-text text-darken-4">uuid:  {item.login.uuid}</span>
                        <span className="card-title userDetail grey-text text-darken-4">Username:  {item.login.username}</span>
                        <span className="card-title userDetail grey-text text-darken-4">Password:  {item.login.password}</span>
                        </div>
                    </div>
                </div>  
            ))}

{/* <div className="user-details">
        <Route path="/users/:id">
          <User findUser={findUser} />
        </Route>
      </div> */}
    </div>

        
        
    );
}
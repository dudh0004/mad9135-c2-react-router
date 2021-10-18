import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css';
import '../Users/users.css';

export default function Users(props) {
    const [list, setList] = useState([]);

    async function fetchData() {
        let url = 'https://randomuser.me/api/?seed=dudh0004&format=json&nat=au,ca,nz,gb,us&results=32';
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results); 
        console.log(data);
    
    }

    useEffect(() => {
        console.log('useEffect was called.');
        fetchData();
    }, []); 
    
    return (
        <div className="users">
            {list.length === 0 && <p>Loading...</p>}
            {list.map((item, index) => (
                
                <div className="users-list" key={item.login.uuid}>
                    <div className="main-card">
                        <div className="card-photo"></div>

                        <div className="image">
                            <img src={item.picture.medium} alt="image1" />
                        </div>
                        <div className="userDetails">
                            <h2 className="name">{item.name.first}    {item.name.last}</h2>
                            <h3 className="email">{item.email}</h3>
                            <h3 className="cell">{item.cell}</h3>
                        </div>
                        <div class="moreDetails">
                            <NavLink to={{pathname: `/users/${index}`}}>More Details</NavLink>
                        </div>
                    </div> 
                </div> 
            ))}
    </div>
    );
}
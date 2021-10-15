import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css';
import '../Users/users.css';
import '../Addresses/addresses.css'

export default function Users(props) {
    const [list, setList] = useState([]);

    async function fetchData() {
        let url = 'https://randomuser.me/api/?seed=dudh0004&nat=au,ca,nz,gb,us&results=32';
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results); 
        console.log(data);
    }

    useEffect(() => {
        console.log('useEffect was called.');
        fetchData();
    }, []);
// export default function Addresses(props) {
    console.log(list)
    let sortedArray = list.sort((a,b) => {
        if(a.name.last > b.name.last) {
            return 1;
        }
        else if (a.name.last < b.name.last) {
            return -1;
        } else {
            return 0;
        }
    })

    return (
        <div className="addresses">
            <table className="centered-responsive-table">
                <thead>

                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                </tr>
                </thead>
                

                {sortedArray.map((item, index) => (

                <tbody>
                <tr>
                    <td>{item.name.first}</td>
                    <td>{item.name.last}</td>
                    <td>{item.location.street.number}  {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.postcode}</td>
                </tr>
                </tbody>
                ))}
                </table>
                
        </div>
    )

}
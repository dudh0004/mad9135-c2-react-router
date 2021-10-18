import { NavLink, useParams } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css';
import '../Users/users.css';
import '../Addresses/addresses.css';

export default function Users(props) {

    let sortedArray = props.result.sort((a,b) => {
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
        {sortedArray.length === 0 && <p>Loading...</p>}
            <table className="address">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                    </tr>
                {sortedArray.map((item, index) => (
                    <tr>
                        <NavLink to={{pathname: `/users/${index}`}}><td className="firstName"> {item.name.first}</td></NavLink>
                        <td>{item.name.last}</td>
                        <td>{item.location.street.number}  {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.postcode}</td>
                    </tr>
                ))}
                </table>
        </div>
    )

}
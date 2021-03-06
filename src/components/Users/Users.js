import { NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css';
import '../Users/users.css';

export default function Users(props) {

    const users = props.result;
    
    return (
        <div className="users">
            {users.length === 0 && <p>Loading...</p>}
            {users.map((item, index) => (
                
                <div className="users-list" key={item.email}>
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
                        <div className="moreDetails">
                            <NavLink to={{pathname: `/users/${index}`}}>More Details</NavLink>
                        </div>
                    </div> 
                </div> 
            ))}
    </div>
    );
}
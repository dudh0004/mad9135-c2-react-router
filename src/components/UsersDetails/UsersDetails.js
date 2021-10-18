import { useParams } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css';
import '../UsersDetails/usersdetails.css';

export default function UsersDetails(props) {
    const userDetail = props.result;
    let {id} = useParams();
    console.log(userDetail);

    return (
        <div className = "usersDetails">
            <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={userDetail[id].picture.large} alt="myImage"/>
                    </div>
                    <div className="card-content">
                            <p className="userName teal-text text-darken-4">{userDetail[id].name.first}  {userDetail[id].name.last}</p>
                            <p className="addressDetail teal-text text-darken-2">Address: {userDetail[id].location.street.number}  {userDetail[id].location.street.name}, {userDetail[id].location.city}, {userDetail[id].location.state}, {userDetail[id].location.postcode}</p>
                            <p className="details teal-text text-darken-2">uuid:      {userDetail[id].login.uuid}</p>
                            <p className="details teal-text text-darken-2">Username:  {userDetail[id].login.username}</p>
                            <p className="details teal-text text-darken-2">Password:  {userDetail[id].login.password}</p> 
                    </div> 
                </div>
                </div>
            </div>
        </div>
    )
}

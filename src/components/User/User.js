import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function User({findUser}) {
  // console.log(props.match.params.id);
  // props.location   props.history
  // props.findPlanet() - function in Planets.js to search state array
  const [user, setUser] = useState(null);
  const { id } = useParams();
  console.log(user);

  useEffect(() => {
    setUser(findUser(id));
  }, [findUser, id]);

  return (
    
          <div className="details">
              <p>kvbm cvnS</p>
    {/* <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div> */}
  </div>
    
  );
}

User.propTypes = {
  findUser: PropTypes.func.isRequired,
};

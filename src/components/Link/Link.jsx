
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-red-500 px-3 rounded-lg">
            <a href={route.path}>{route.name}</a>
            
        </li>
    );
};


Link.proTotype = { 
route: PropTypes.object
}

export default Link;
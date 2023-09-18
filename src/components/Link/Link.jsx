
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-gray-300 px-3 mb-1 rounded-lg">
            <a href={route.path}>{route.name}</a>
            
        </li>
    );
};


Link.proTotype = { 
route: PropTypes.object
}

export default Link;
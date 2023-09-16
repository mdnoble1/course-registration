import PropTypes from 'prop-types';


const Cartitem = ({ id, cartitem }) => {
    
    const { title } = cartitem;

    return (
        <div>
            <h4 className="font-medium text-lg text-gray-400">{id} {title}</h4>
        </div>
    );
};

Cartitem.propTypes = {
    cartitem: PropTypes.object, 
    id: PropTypes.number.isRequired 
};

export default Cartitem;

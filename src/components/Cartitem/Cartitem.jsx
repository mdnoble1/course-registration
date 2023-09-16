import PropTypes from 'prop-types';


const Cartitem = ({ id, cartitem }) => {
    
    const { title } = cartitem;

    return (
        <div>
            <h4 className="text-base font-medium">{id}. {title}</h4>
        </div>
    );
};

Cartitem.propTypes = {
    cartitem: PropTypes.object, 
    id: PropTypes.number.isRequired 
};

export default Cartitem;

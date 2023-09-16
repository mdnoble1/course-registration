import Cartitem from '../Cartitem/Cartitem';
import PropTypes from 'prop-types';


const Cart = ({ cartproduct, allTimes, remaining, totalPrice }) => {
    // console.log(allTimes, remaining, cartproduct); 

    return (
        <div className="w-1/4 px-10 pt-8 pb-16 text-left bg-gray-100 rounded-xl drop-shadow-2xl h-fit">
            <h3 className="font-bold text-xl border-b pb-4 border-b-gray-400 text-blue-500">
                Credit Hour Remaining {remaining} hr
            </h3>
            <h4 className="font-bold text-xl py-4">Course Name :</h4>
            {cartproduct.map((cartitem, index) => (
                <Cartitem key={index} cartitem={cartitem} id={index + 1} />
            ))}

            <h3 className="text-lg font-medium border-t border-t-gray-400 border-b border-b-gray-400 py-4 mt-5 text-gray-600">
                Total Credit Hour : {allTimes}
            </h3>

            <p className="text-lg font-medium mt-4 text-gray-600">
                Total Price : {totalPrice} USD
            </p>
        </div>
    );
};


Cart.propTypes = {
    cartproduct: PropTypes.array,
    allTimes: PropTypes.number.isRequired, 
    remaining: PropTypes.number,
    totalPrice: PropTypes.number,
};

export default Cart; 

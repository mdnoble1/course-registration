import Cartitem from '../../Cartitem/Cartitem';
import PropTypes from 'prop-types';


const Cart = ({ cartitem, allTimes, remaining, totalPrice }) => {
    console.log(allTimes, remaining, cartitem); 

    return (
        <div className="lg:w-1/4 border-t-2 p-3 text-left">
            <h3 className="text-base font-medium border-b pb-3 border-b-gray-950 text-blue-600">
                Credit Hour Remaining : {remaining}hr
            </h3>

            <h4 className="text-lg font-bold py-2">Course Name :</h4>
            {cartitem.map((bookmark, index) => (
                <Cartitem key={index} bookmark={bookmark} id={index + 1} />
            ))}
            <h3 className="text-base font-medium border-b py-3 mt-5 border-b-gray-950 border-t  border-t-gray-950 text-slate-500">
                Total Credit Hour : {allTimes}hr
            </h3>
            <p className="text-base font-medium mt-3 text-slate-500">
                Total Price : {totalPrice} USD
            </p>
        </div>
    );
};


Cart.propTypes = {
    cartitem: PropTypes.array,
    allTimes: PropTypes.number.isRequired, 
    remaining: PropTypes.number,
    totalPrice: PropTypes.number,
};

export default Cart; 

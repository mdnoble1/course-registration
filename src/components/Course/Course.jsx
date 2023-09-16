import PropTypes from "prop-types";


const Course = ({ course, handleSelectedToCart }) => {
  
  const { cover, title, description, price, time_hour } = course;

  return (
    <div>
      <div className="w-80 bg-gray-100 p-4 rounded-lg drop-shadow-2xl">
        <img
          className="mb-4 w-full"
          src={cover}
          alt=""
        />
        <h3 className="font-semibold text-lg mb-3">
          {title}
        </h3>
        <p className="text-gray-400 text-sm text-justify mb-4 h-36">
          {description}
        </p>
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="font-medium text-gray-400">Price : {price}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Credit : {time_hour}hr</p>
          </div>
        </div>
        <button
          onClick={() => handleSelectedToCart(course)}
          className="w-full bg-sky-500 py-2 rounded-md font-semibold text-lg text-white hover:bg-sky-400">
          Select
        </button>
      </div>
    </div>
  );
};


Course.propTypes = {
  course: PropTypes.object,
  handleSelectedToCart: PropTypes.func, 
};

export default Course; 

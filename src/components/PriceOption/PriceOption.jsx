import PropTypes from'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features} = option
    return (
        <div className='bg-green-200 text-slate-600 flex flex-col rounded-md p-4 mb-3'>
            <h2 className='text-center'>
           <span className='text-4xl font-semibold'>{price}</span>
          
            </h2>
          <h4 className='text-2xl '>{name}</h4>
         <div className="pl-4 flex-grow">
         {
            features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
          }
         </div>
         <button className='mt-12 bg-blue-300 w-full py-2 font-bold rounded-lg hover:bg-blue-400'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option : PropTypes.object
}
export default PriceOption;
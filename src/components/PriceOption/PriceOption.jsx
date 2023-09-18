import PropTypes from'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features} = option
    return (
        <div className='bg-green-200 rounded-md p-4'>
            <h2>
           <span className='text-5xl font-semibold'>{price}</span>
          
            </h2>
          <h4 className='text-2xl'>{name}</h4>
          {
            features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
          }
        </div>
    );
};
PriceOption.propTypes = {
    option : PropTypes.object
}
export default PriceOption;

import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

    const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to cardio equipment",
            "Free weights area",
            "Locker room access",
            "Group fitness classes (limited)"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$49.99/month",
          "features": [
            "Access to cardio equipment",
            "Free weights area",
            "Locker room access",
            "Unlimited group fitness classes",
            "Sauna and steam room access",
            "Personal training sessions (2 per month)"
          ]
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "price": "$99.99/month",
          "features": [
            "Access to cardio equipment",
            "Free weights area",
            "Locker room access",
            "Unlimited group fitness classes",
            "Sauna and steam room access",
            "Personal training sessions (4 per month)",
            "Nutritional consultation"
          ]
        }
      ]
      
    return (
        
    <div className="m-8">
        <h2 className='text-4xl'>Best Prices in the town</h2>
        <div className='md:grid grid-cols-3 gap-4'>
            
            {
               PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            } 
        </div>
    </div>
    
    );
};

export default PriceOptions;
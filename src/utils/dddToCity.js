import dddList from '../constants/ddd';

const dddToCity = cityDDD => {
  if (Object.prototype.hasOwnProperty.call(dddList, cityDDD))
    return dddList[cityDDD];
  return 'City not found';
};

export default dddToCity;

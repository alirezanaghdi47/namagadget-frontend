// libraries
import { useState } from 'react';

const useFilter = () => {
  const [categories, setCategories] = useState([]);
  const [prices, setPrices] = useState([10000000, 50000000]);
  const [hasImage, setHasImage] = useState(true);

  const filters = { categories, prices, hasImage };

  const changeCategories = (value) => {
    if (categories.includes(value)) {
      setCategories((prevState) => prevState.filter((category) => category !== value));
    } else {
      setCategories((prevState) => [...prevState, value]);
    }
  };

  const changePrices = (values) => setPrices(values);

  const changeHasImage = (value) => setHasImage(value);

  const changeFilters = (key, value) => {
    switch (key) {
      case 'categories':
        changeCategories(value);
        break;
      case 'prices':
        changePrices(value);
        break;
      case 'hasImage':
        changeHasImage(value);
        break;
      default:
        return null;
    }
  };

  const resetFilters = () => {
    setCategories([]);
    setPrices([10000000, 50000000]);
    setHasImage(true);
  };

  return { filters, changeFilters, resetFilters };
};

export default useFilter;

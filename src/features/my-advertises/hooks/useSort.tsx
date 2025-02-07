// libraries
import { useState } from 'react';

const useSort = () => {
  const [sort, setSort] = useState('newest');

  const changeSort = (value) => {
    setSort(value);
  };

  return { sort, changeSort };
};

export default useSort;

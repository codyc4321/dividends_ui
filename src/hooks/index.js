import {useEffect} from 'react';

const useDebounceTerm = (setter, searchTerm, stallTime) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setter(searchTerm);
    }, stallTime);

    return () => {
      clearTimeout(timerId);
    };

  }, [searchTerm]);
}


export default useDebounceTerm;

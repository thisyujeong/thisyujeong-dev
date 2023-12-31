import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number = 300) => {
  const [debounced, setDebounced] = useState<string>(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};

export default useDebounce;

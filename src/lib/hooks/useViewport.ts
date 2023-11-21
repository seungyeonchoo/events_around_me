import { throttle } from 'lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../store';
import { handleViewport } from '../store/slices/viewportSilce';

const useViewport = () => {
  const { width, height } = useSelector((state: ReducerType) => state.viewport);
  const dispatch = useDispatch<AppDispatch>();

  const handleViewportSize = throttle(() => {
    dispatch(handleViewport());
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleViewportSize);
    return () => {
      window.removeEventListener('resize', handleViewportSize);
    };
  }, []);

  return { width, height };
};

export default useViewport;

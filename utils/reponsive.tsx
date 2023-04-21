import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return <>{isMobile && children}</>;
};

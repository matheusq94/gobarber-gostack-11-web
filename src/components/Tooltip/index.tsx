import React from 'react';

import { Container } from './styles';

interface ToooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<ToooltipProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;

import { CSSTransition } from 'react-transition-group';

import './styles.css';

export const Appear = ({ children }) => {
  return (
    <CSSTransition in appear timeout={300}>
      <div className="root">{children}</div>
    </CSSTransition>
  );
};

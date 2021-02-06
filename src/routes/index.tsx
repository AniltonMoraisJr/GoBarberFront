import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route';

// import { Container } from './styles';

const Routes: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, (l) => l.pathname, {
    config: { duration: 1000 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <>
      {transitions.map(({ item: l, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={l}>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default Routes;

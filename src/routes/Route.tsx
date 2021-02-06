import React from 'react';
import {
  RouteProps as ReactRouterDomProps,
  Route as ReactRouterDomRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
// import { Container } from './styles';

interface RouteProps extends ReactRouterDomProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <ReactRouterDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;

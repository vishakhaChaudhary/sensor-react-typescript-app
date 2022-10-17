/* import packages */
import React from "react";
import { Switch, Route } from "react-router-dom";

/* import active routes */
import Routers from "./routes";

const Routes: React.FC = () => {
  return (
    <Switch>
      {Routers.map((route: any) => {
        return (
          <Route
            exact
            path={route.path}
            key={route.id}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;

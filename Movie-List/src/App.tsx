import React from "react";
import Picasso from "@toptal/picasso-provider";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import routes from "./config/routes";

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <Picasso>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component {...props} />
                )}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </Picasso>
  );
};

export default App;

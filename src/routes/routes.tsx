import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routeUrls } from '.';
import CatListContainer from '../components/Cats/organisms/CatListContainer';
import UploadCatImageContainer from '../components/Cats/organisms/UploadCatImageContainer';



export interface RoutesProps {
  isAuthenticated: boolean;
}

const Routes = ({ isAuthenticated }: RoutesProps) => {
  return (
    <Switch>
      <Route exact path={routeUrls.HOME_URL} component={CatListContainer}/>

      <Route exact path={routeUrls.UPLOAD_URL} component={UploadCatImageContainer}/>

      
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  );
};

Routes.defaultProps = {
  isAuthenticated: false,
};

export default Routes;

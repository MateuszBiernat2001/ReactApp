import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store'
import MainTemplate from '../../templates/MainTemplate'
import monday from '../monday';
import tuesday from '../tuesday';
import wedneday from '../wednesday';
import thursday from '../thursday';
import friday from '../friday';
import saturday from '../saturday';
import sunday from '../sunday'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path ="/" component={monday}/>
          <Route path ="/tuesday" component={tuesday}/>
          <Route path ="/wednesday" component={wedneday}/>
          <Route path ="/thursday" component={thursday}/>
          <Route path ="/friday" component={friday}/>
          <Route path ="/saturday" component={saturday}/>
          <Route path ="/sunday" component={sunday}/>
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
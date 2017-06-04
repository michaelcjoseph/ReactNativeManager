import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Please Login" initial />
    </Scene>
    <Scene key="main">
      <Scene
        initial
        key="employeeList"
        component={EmployeeList}
        title="Employee List"
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
      />
      <Scene
        key="employeeCreate"
        component={EmployeeCreate}
        title="Create Employee"
      />
      <Scene
        key="employeeEdit"
        component={EmployeeEdit}
        title="Edit Employee"
      />
    </Scene>
  </Router>
);

export default RouterComponent;

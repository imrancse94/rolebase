import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Login = React.lazy(() => import('./views/Pages/Login'));

const routes = [
  {  auth:true, exact:true, path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {  auth:false, exact:true, path: '/login', name: 'Login', component: Login }
];

export default routes;

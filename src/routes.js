import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Product = Loadable({
  loader: () => import('./views/Product/Index'),
  loading: Loading,
});


const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/product', name: 'Produtos', component: Product },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

export default routes;

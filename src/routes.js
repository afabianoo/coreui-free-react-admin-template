import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const FluxoDeCaixa = Loadable({
  loader: () => import('./views/FluxoDeCaixa/FluxoDeCaixa'),
  loading: Loading,
});

const Product = Loadable({
  loader: () => import('./views/Product/Index'),
  loading: Loading,
});


const routes = [
  { path: '/', exact: true, name: 'Início', component: DefaultLayout },
  { path: '/product', name: 'Produtos', component: Product },
  { path: '/fluxoDeCaixa', name: 'Fluxo de caixa', component: FluxoDeCaixa },
];

export default routes;

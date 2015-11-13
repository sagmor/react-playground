import { Router5, RouteNode } from 'router5'
import historyPlugin from 'router5-history';

export const routes = [
  {name: 'inbox', path: '/inbox'},
  {name: 'thread', path: '/thread/:threadID' },
  {name: 'account', path: '/account', children: [
    {name: 'login', path: '/login'},
    {name: 'logout', path: '/logout'},
  ]}
];


export function createRouter(routes) {
    let router = new Router5(routes)
        .setOption('useHash', true)
        // .setOption('hashPrefix', '!')
        .setOption('defaultRoute', 'inbox')

        // Plugins
        .usePlugin(Router5.loggerPlugin())
        //.usePlugin(historyPlugin());

    return router;
};

export default createRouter(routes);

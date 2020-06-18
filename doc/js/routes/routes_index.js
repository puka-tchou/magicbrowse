var ROUTES_INDEX = {
  name: '<root>',
  kind: 'module',
  className: 'AppModule',
  children: [
    {
      name: 'routes',
      filename: 'src/app/app-routing.module.ts',
      module: 'AppRoutingModule',
      children: [{ path: '**', component: 'DashboardComponent' }],
      kind: 'module',
    },
    {
      name: 'routes',
      filename: 'src/app/dashboard/dashboard-routing.module.ts',
      module: 'DashboardRoutingModule',
      children: [{ path: 'card/:query', component: 'DashboardComponent' }],
      kind: 'module',
    },
  ],
};

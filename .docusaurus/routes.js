import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-theme-zen/__docusaurus/debug',
    component: ComponentCreator('/docusaurus-theme-zen/__docusaurus/debug', '4bd'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/__docusaurus/debug/config',
    component: ComponentCreator('/docusaurus-theme-zen/__docusaurus/debug/config', '6e6'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/__docusaurus/debug/content',
    component: ComponentCreator('/docusaurus-theme-zen/__docusaurus/debug/content', 'dcc'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/__docusaurus/debug/globalData',
    component: ComponentCreator('/docusaurus-theme-zen/__docusaurus/debug/globalData', '36b'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/__docusaurus/debug/metadata',
    component: ComponentCreator('/docusaurus-theme-zen/__docusaurus/debug/metadata', '5d1'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/__docusaurus/debug/registry',
    component: ComponentCreator('/docusaurus-theme-zen/__docusaurus/debug/registry', 'eae'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/__docusaurus/debug/routes',
    component: ComponentCreator('/docusaurus-theme-zen/__docusaurus/debug/routes', '12e'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/about',
    component: ComponentCreator('/docusaurus-theme-zen/about', '1e1'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/archive',
    component: ComponentCreator('/docusaurus-theme-zen/archive', '066'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/first-blog',
    component: ComponentCreator('/docusaurus-theme-zen/first-blog', '046'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/friends/',
    component: ComponentCreator('/docusaurus-theme-zen/friends/', '0fc'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/project/',
    component: ComponentCreator('/docusaurus-theme-zen/project/', '865'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/resource/',
    component: ComponentCreator('/docusaurus-theme-zen/resource/', '241'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/search',
    component: ComponentCreator('/docusaurus-theme-zen/search', 'e6e'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/tags',
    component: ComponentCreator('/docusaurus-theme-zen/tags', '8f3'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/tags/docusaurus-theme-zen',
    component: ComponentCreator('/docusaurus-theme-zen/tags/docusaurus-theme-zen', '5e2'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/tags/lifestyle',
    component: ComponentCreator('/docusaurus-theme-zen/tags/lifestyle', '7c3'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/docs',
    component: ComponentCreator('/docusaurus-theme-zen/docs', '033'),
    routes: [
      {
        path: '/docusaurus-theme-zen/docs/Stack',
        component: ComponentCreator('/docusaurus-theme-zen/docs/Stack', '36c'),
        exact: true,
        sidebar: "stack"
      }
    ]
  },
  {
    path: '/docusaurus-theme-zen/',
    component: ComponentCreator('/docusaurus-theme-zen/', '1f4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

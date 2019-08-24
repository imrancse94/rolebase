import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Login = React.lazy(() => import('./views/Pages/Login'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));

const routes = [
  {  auth:true, exact:true, path: '/', name: 'Home' },
  {  auth:true, exact:true, path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {  auth:false, exact:true, path: '/login', name: 'Login', component: Login },
  {  auth:true, exact:true, path: '/theme', name: 'Theme', component: Colors },
  {  auth:true, exact:true, path: '/theme/colors', name: 'Colors', component: Colors },
  {  auth:true, exact:true, path: '/theme/typography', name: 'Typography', component: Typography },
  {  auth:true, exact:true, path: '/base', name: 'Base', component: Cards },
  {  auth:true, exact:true, path: '/base/cards', name: 'Cards', component: Cards },
  {  auth:true, exact:true, path: '/base/forms', name: 'Forms', component: Forms },
  {  auth:true, exact:true, path: '/base/switches', name: 'Switches', component: Switches },
  {  auth:true, exact:true, path: '/base/tables', name: 'Tables', component: Tables },
  {  auth:true, exact:true, path: '/base/tabs', name: 'Tabs', component: Tabs },
  {  auth:true, exact:true, path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  {  auth:true, exact:true, path: '/base/carousels', name: 'Carousel', component: Carousels },
  {  auth:true, exact:true, path: '/base/collapses', name: 'Collapse', component: Collapses },
  {  auth:true, exact:true, path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  {  auth:true, exact:true, path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  {  auth:true, exact:true, path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  {  auth:true, exact:true, path: '/base/navbars', name: 'Navbars', component: Navbars },
  {  auth:true, exact:true, path: '/base/navs', name: 'Navs', component: Navs },
  {  auth:true, exact:true, path: '/base/paginations', name: 'Paginations', component: Paginations },
  {  auth:true, exact:true, path: '/base/popovers', name: 'Popovers', component: Popovers },
  {  auth:true, exact:true, path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  {  auth:true, exact:true, path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  {  auth:true, exact:true, path: '/buttons', name: 'Buttons', component: Buttons },
  {  auth:true, exact:true, path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  {  auth:true, exact:true, path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  {  auth:true, exact:true, path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  {  auth:true, exact:true, path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  {  auth:true, exact:true, path: '/icons', name: 'Icons', component: CoreUIIcons },
  {  auth:true, exact:true, path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  {  auth:true, exact:true, path: '/icons/flags', name: 'Flags', component: Flags },
  {  auth:true, exact:true, path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  {  auth:true, exact:true, path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  {  auth:true, exact:true, path: '/notifications', name: 'Notifications', component: Alerts },
  {  auth:true, exact:true, path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  {  auth:true, exact:true, path: '/notifications/badges', name: 'Badges', component: Badges },
  {  auth:true, exact:true, path: '/notifications/modals', name: 'Modals', component: Modals },
  {  auth:true, exact:true, path: '/widgets', name: 'Widgets', component: Widgets },
  {  auth:true, exact:true, path: '/charts', name: 'Charts', component: Charts },
  {  auth:true, exact:true, path: '/users',  name: 'Users', component: Users },
  {  auth:true, exact:true, path: '/users/:id', name: 'User Details', component: User },
  {  auth:false, path: '', name: 'Page404', component: Page404 }
];

export default routes;

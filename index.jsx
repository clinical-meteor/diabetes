import HelloWorldPage from './client/HelloWorldPage.jsx';
import PostcardPage from './client/PostcardPage.jsx';

var DynamicRoutes = [{
  'name': 'HelloWorldPage',
  'path': '/diabetes',
  'component': HelloWorldPage
}];

var SidebarElements = [{
  'primaryText': 'Diabetes',
  'to': '/diabetes',
  'href': '/diabetes'
}];

export { SidebarElements, DynamicRoutes, SamplePage, PostcardPage };

const SitemapPlugin = require('sitemap-webpack-plugin').default;
const request = require('sync-request');
const url = 'https://api.publicapis.org';
const routes = ['/', '/categories', '/random'];

const fetchCategories = () => {
  try {
    const response = request('GET', `${url}/categories`);
    const body = JSON.parse(response.getBody('utf8'));
    if (body.length > 0) {
      return body;
    }
  } catch (error) {
    console.error(error);
  }
};

const fetchApis = () => {
  try {
    const response = request('GET', `${url}/entries`);
    const body = JSON.parse(response.getBody('utf8'));
    if (body.count > 0) {
      return body.entries.map((entry) => entry.API);
    }
  } catch (error) {
    console.error(error);
  }
};

const getRoutesList = () => {
  const categories = fetchCategories();
  const apis = fetchApis();
  return routes
    .concat(categories.map((cat) => `category/${encodeURIComponent(cat)}`))
    .concat(apis.map((api) => `apis/${encodeURIComponent(api)}`));
};

const paths = getRoutesList();
console.log('Paths by the time of start: ', paths);

module.exports = {
  configureWebpack: {
    plugins: [new SitemapPlugin('http://localhost:8080', paths, {})],
  },
};

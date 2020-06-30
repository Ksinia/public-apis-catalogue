# :book: public-apis-catalogue :book:

This app shows a catalogue of public APIs that are fetched from [https://api.publicapis.org](https://api.publicapis.org/).

## [Check out the deployed version here!](https://public-apis-catalogue.netlify.app)

## Features

### Homepage

- a paginated list of all public APIs
- each API is clickable to redirect to its detail page
- ascending/descending sorting option
- filters by APIs' characteristics

### Detailed Page

- details of an API and a link to it.
- 3 related APIs (APIs from the same category)

### Random Page

- random API
- button to shows another random API

### Categories

- list of all categories of APIs
- each category is a link to a category page

### Category Page

- list of all APIs within this category
- each API is clickable to redirect to its detail page

### Generated sitemap

- contains all paths including dynamic paths
- in XML format
- available by link in the footer which is [https://public-apis-catalogue.netlify.app/sitemap.xml](https://public-apis-catalogue.netlify.app/sitemap.xml)

## Installation

- Clone the repository
- Run npm install
  ```
  npm install
  ```

## Compiles and hot-reloads for development

```
npm run serve
```

## Compiles and minifies for production

```
npm run build
```

## Lints and fixes files

```
npm run lint
```

## Technologies used

- vue
- vue-router

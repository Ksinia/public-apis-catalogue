<template>
  <div id="app">
    <div id="content">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/categories">Categories</router-link> |
        <router-link to="/random">Random API</router-link>
      </div>
      <router-view />
    </div>
    <footer>
      Copyright ©
      <a href="https://ksinia.net/cv/gulyaeva.html">Ksenia Gulyaeva</a>
      {{ new Date().getFullYear() }}
      |
      <a href="https://github.com/Ksinia/public-apis-catalogue">Source Code</a>
      |
      <a href="/sitemap.xml">Sitemap</a>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}
#nav {
  width: 100%;
  padding: 10px;
  position: fixed;
  z-index: 999;
  background-color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#content {
  padding-bottom: 3.5rem;
}
footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  color: grey;
}
a {
  color: #42b983;
}
button {
  background-color: #42b983;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #2c3e50;
  padding: 0.5rem;
  margin-bottom: 2rem;
  margin: auto 1rem;
  font-family: inherit;
  font-size: medium;
}
button:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>

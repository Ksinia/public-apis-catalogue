<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/categories">Categories</router-link> |
      <router-link to="/random">Random API</router-link>
    </div>
    <router-view />
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
}

#nav {
  width: 100%;
  padding: 10px;
  position: fixed;
  /* top: 0px; */
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

footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  color: grey;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
a {
  color: #42b983;
}
</style>

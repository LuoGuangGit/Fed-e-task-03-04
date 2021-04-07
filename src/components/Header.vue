<template>
  <header
    class="header"
    :class="{
      sticky: $route.path === '/' || $route.path.includes('/projects/'),
    }"
  >
    <div class="container">
      <div class="left">
        <g-link to="/" class="home-link">
          <img
            class="logo"
            src="../../static/logo.svg"
            :alt="webInfo.siteName"
          />
        </g-link>
      </div>
      <nav class="nav right">
        <g-link class="nav__link" to="/articles">博客</g-link>
        <g-link class="nav__link" to="/contact">关于</g-link>
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  allStrapiWebInfo {
    edges {
      node {
        siteName
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "Header",
  computed: {
    webInfo () {
      return this.$static.allStrapiWebInfo.edges[0].node;
    }
  },
};
</script>

<style scoped>
.header {
  position: relative;
  height: 6rem;
  z-index: 10;
  position: relative;
}
.header::after {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  filter: blur(0.5px);
  display: block;
  content: "";
}
.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.home-link {
  text-decoration: none;
}
.logo {
  height: 1.5rem;
}
.site-name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
}
.nav > * {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}
.nav > *:last-of-type {
  margin: 0;
}
.nav > *:hover {
  border-color: inherit;
}
.nav > .active {
  border-color: inherit;
}
</style>

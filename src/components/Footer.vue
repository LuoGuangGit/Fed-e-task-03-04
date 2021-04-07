<template>
  <footer class="footer">
    <div class="container">
      <span v-text="webInfo.copyright" />
    </div>
  </footer>
</template>

<static-query>
query {
  allStrapiWebInfo {
    edges {
      node {
        copyright
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'Footer',
  computed: {
    webInfo () {
      return this.$static.allStrapiWebInfo.edges[0].node;
    }
  },
};
</script>

<style scoped>
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>

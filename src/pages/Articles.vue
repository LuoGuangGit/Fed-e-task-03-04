<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          一位智者曾说过...
        </h1>
      </div>
    </div>

    <g-link
      class="journal-post"
      v-for="item in $page.articles.edges"
      :key="item.node.id"
      :to="'/article/' + item.node.id"
    >
      <div class="container journal">
        <h2 class="journal-title">{{ item.node.title }}</h2>
        <p class="journal-excerpt">{{ item.node.desc }}</p>
      </div>
    </g-link>
    <Pager
      class="nav-paginate"
      ariaPrevLabel="prev"
      ariaNextLabel="next"
      :info="$page.articles.pageInfo"
    />
  </Layout>
</template>

<page-query>
query ($page: Int) {
	articles: allStrapiArticle (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        desc
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  name: "ArticlesList",
  metaInfo: {
    title: "文章列表",
  },
  components: {
    Pager,
  },
};
</script>

<style scoped>
.container.journal {
  max-width: 720px;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.journal-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: var(--color-base-1);
}
.journal-post:hover > * {
  transform: translateX(4rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.journal-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .journal-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 5rem 0;
  }
}

.nav-paginate {
  max-width: 720px;
  margin: 30px auto 0;
  padding: 0 2rem;
}
.nav-paginate a {
  height: 30px;
  width: 30px;
  display: inline-block;
  border-radius: 3px;
  background: #f4f4f5;
  font-size: 13px;
  font-weight: bold;
  color: #606266;
  line-height: 30px;
  text-align: center;
  vertical-align: top;
  text-decoration: none;
  margin-right: 10px;
}
.nav-paginate a[aria-label="next"],
.nav-paginate a[aria-label="prev"] {
  font-size: 20px;
  line-height: 28px;
}
.nav-paginate a.active {
  color: #fff;
  background: #409eff;
  cursor: default;
}
.nav-paginate a:not(.active):hover {
  color: #409eff;
}
@media (min-width: 860px) {
  .nav-paginate {
    padding: 0 6rem;
  }
}
</style>

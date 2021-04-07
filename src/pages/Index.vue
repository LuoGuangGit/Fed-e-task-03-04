<template>
  <Layout>
    <div class="container">
      <Hero />
      <Pictures :pictures="$page.pictures.edges" />
    </div>
    <Articles :articles="$page.articles.edges" />
  </Layout>
</template>

<page-query>
query {
	articles: allStrapiArticle (sortBy: "id") {
    edges {
      node {
        id
        title
      }
    }
  }
  pictures: allStrapiPicture (sortBy: "id") {
    edges {
      node {
        id
        title
        thumbnail {
          url
        }
        atlas {
          url
        }
        tags {
          id
          name
        }
      }
    }
  }
}
</page-query>

<script>
import Hero from '@/components/home/Hero';
import Pictures from '@/components/home/Pictures';
import Articles from '@/components/home/Articles';

export default {
  name: "Home",
  components: {
    Hero,
    Pictures,
    Articles,
  },
};
</script>

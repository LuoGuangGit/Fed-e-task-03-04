<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <h1 class="project-title" v-html="$page.picture.title" />
          <div class="project-info">

            <div class="categories-container">
              <div class="categories">
                <span class="label">分类</span>
                <span 
                  class="category"
                  v-for="item in $page.picture.tags"
                  v-text="item.name"
                  :key="item.id"
                />
              </div>
            </div>

            <div class="year-container">
              <span class="label">发布时间</span>
              <div v-html="$page.picture.published_at"/>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="desc" v-text="$page.picture.desc"></div>
          <g-image
            class="thumbnail"
            v-for="item in $page.picture.atlas"
            :key="item.id"
            :src="'http://localhost:1337' + item.url"
            :alt="item.alternativeText || $page.picture.title"
          />
        </div>

      </div>

    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
	picture: strapiPicture  (id: $id) {
    id
    title
    desc
    color
    published_at (format: "D.MMM YYYY")
    atlas {
      url
      alternativeText
    }
    tags {
      id
      name
    }
  }
}
</page-query>

<script>
export default {
  name: 'PictureDetail',
  metaInfo () {
    return {
      title: this.$page.picture.title,
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>

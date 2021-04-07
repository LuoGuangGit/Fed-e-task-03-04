<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 v-html="$page.article.title" class="journal-title" />
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">作者</span>
              <span class="author-name" v-text="'luoguang'" />
            </div>
            <div class="journal-date">
              <span class="label">发布日期</span>
              <div v-text="$page.article.published_at" />
            </div>
            <div class="journal-time">
              <span class="label">阅读时间</span>
              <span>{{ timeDesc }}</span>
            </div>
          </div>
        </div>
        <div class="journal-content" v-html="mdToHtml($page.article.content)" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
	article: strapiArticle  (id: $id) {
    id
    title
    content
    published_at (format: "D.MMM YYYY")
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it';
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

const md = new MarkdownIt();

dayjs.extend(isLeapYear);
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export default {
  name: "ArticleDetail",
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown);
    }
  },
  data() {
    return {
      openTime: "",
      timeDesc: "",
      timer: null,
    };
  },
  metaInfo() {
    return {
      title: this.$page.article.title,
    };
  },
  created() {
    this.openTime = new Date();
    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.timeDesc = dayjs().from(this.openTime);
      }, 1000);
    }
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer);
  }
};
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
.journal-content p {
  line-height: 1.5;
  font-size: 1.15rem;
}
.journal-content h2 {
  font-size: 2rem;
}
.journal-content h3 {
  font-size: 1.5rem;
}
.journal-content h4,
.journal-content h5,
.journal-content h6 {
  font-size: 1.15rem;
}
</style>

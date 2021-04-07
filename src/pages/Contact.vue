<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">嗨!</h1>
        <p>
          博客简介。
        </p>
      </div>

      <form class="contact-form" name="contact">
        <div class="sender-info">
          <div>
            <label for="name" class="label">姓名</label>
            <input type="text" name="name" v-model="form.userName" required />
          </div>
          <div>
            <label for="email" class="label">邮箱</label>
            <input type="email" name="email" v-model="form.emial" required />
          </div>
        </div>

        <div class="message">
          <label for="message" class="label">信息</label>
          <textarea name="message" v-model="form.info"></textarea>
        </div>

        <button class="button" @click.prevent="onSubmit">提交</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios';

export default {
  name: "Contact",
  data () {
    return {
      form: {
        userName: '',
        email: '',
        info: '',
      }
    }
  },
  metaInfo: {
    title: '联系',
  },
  methods: {
    async onSubmit () {
      try {
        await axios({
          method: 'POST',
          url: 'http://localhost:1337/contacts',
          data: this.form,
        });
        alert('提交成功');
      } catch (err) {
        alert('提交失败，请稍后重试');
      }
    }
  }
};
</script>

<style scoped>
.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,
textarea:focus {
  border-color: var(--color-contrast-1);
}
input,
textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

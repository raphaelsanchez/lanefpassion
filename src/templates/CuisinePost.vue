<template>
  <Layout>
    <article class="project">
      <header class="project__header">
        <h1 class="project__title">{{ cuisine.title }}</h1>
        <p v-if="cuisine.excerpt" class="projet__excerpt lead">
          extrait : {{ cuisine.excerpt }}
        </p>
      </header>

      <div class="project__content" v-html="cuisine.content" />

      <footer class="project__footer">
        <g-link to="/cuisines" class="button button-secondary"
          >Nos cuisines</g-link
        >
      </footer>
    </article>
  </Layout>
</template>

<page-query>
query Cuisine ($id: ID!) {
  post: cuisinePost (id: $id) {
    title
    content
    subtitle
    excerpt
    cover
  }
}
</page-query>

<script>
export default {
  computed: {
    cuisine() {
      return this.$page.post
    },
  },
}
</script>

<style>
.project__header {
  text-align: center;
}

.project__content > * {
  margin-left: auto;
  margin-right: auto;
}
.project__content h2 + p {
  font-size: 1.6em;
  font-family: var(--font-accent);
}
.project__content > *:not(img) {
  max-width: 920px;
}
</style>

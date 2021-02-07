<template>
  <Layout>
    <article class="project">
      <header class="project__header">
        <h1 class="project__title" v-html="$page.post.title" />
      </header>
      <div class="post__content" v-html="$page.post.content" />
      <footer class="project__footer">
        <g-link to="/cuisines" class="button">Nos cuisines</g-link>
      </footer>
    </article>
  </Layout>
</template>

<page-query>
query Cuisine ($id: ID!) {
  post: cuisinePost (id: $id) {
    title
    path
    content
  }
}
</page-query>

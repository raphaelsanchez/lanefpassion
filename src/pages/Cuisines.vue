<template>
  <Layout>
    <header class="site-content__header">
      <h1>Nos cuisines</h1>
      <p class="lead">
        Nous sélectionnons pour vous des marques haut de gamme en électroménager et ustensiles culinaires.
      </p>
    </header>

    <article
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="cuisine"
    >
      <g-link :to="item.node.path">
        <h2 class="cuisine__title">{{ item.node.title }}</h2>
      </g-link>
    </article>

  </Layout>
</template>

<page-query>
query Cuisines {
  posts:allCuisinePost{
    edges {
      node {
        id
        title
      	path
      }
    }
  }
}
</page-query>

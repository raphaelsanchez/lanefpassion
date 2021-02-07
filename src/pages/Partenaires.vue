<template>
  <Layout>
    <header class="site-content__header">
      <h1>Partenaire</h1>
      <p class="lead">
        Nous sélectionnons pour vous des marques haut de gamme en électroménager
        et ustensiles culinaires. Venez les retrouver en boutique !
      </p>
    </header>

    <article v-for="item in $page.posts.edges" :key="item.node.id" class="partenaire" >
      <figure class="partenaire__cover">
        <g-image :alt="item.node.title" :src="item.node.cover" />
      </figure>
      <div class="partenaire__content">
        <h2 class="partenaire__title">{{ item.node.title }}</h2>
        <p>{{ item.node.description }}</p>
        <g-link :to="item.node.url">Voir le site</g-link>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Partenaires {
  posts: allPartenairePost {
    edges {
      node {
        id
        title
        description
        cover
        url
      }
    }
  }
  
}
</page-query>

<style scoped>
.partenaire {
  display: grid;
  margin-bottom: var(--spacing);
}

.partenaire__content {
  padding: calc( var(--spacing) * 2 ) calc( var(--spacing) * 1.5 );
  background-color: var(--dark-color);
  color: var(--light-color);
}
.partenaire:nth-child(odd) .partenaire__content {
  background-color: var(--medium-color);
  color: var(--dark-color);
}

@media (min-width: 60rem) {
  .partenaire {
    grid-template-columns: 2fr 1fr;
  }
}
</style>>
  
</style>

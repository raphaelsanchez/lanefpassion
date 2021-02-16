<template>
  <Layout>
    <header class="site-content__header">
      <h1>Nos cuisines</h1>
      <p class="lead">
        Nous sélectionnons pour vous des marques haut de gamme en électroménager
        et ustensiles culinaires.
      </p>
    </header>

    <section class="cuisines">
      <CuisineCard v-for="item in cuisines" :key="item.id" :cuisine="item"/>
    </section>

  </Layout>
</template>

<page-query>
query Cuisines {
  allCuisinePost{
    edges {
      node {
        id
        title
        path
        subtitle
        cover
      }
    }
  }
}
</page-query>

<script>
import CuisineCard from "~/components/CuisineCard"
export default {
  name: "Cuisines",
  components: {
    CuisineCard
  },
  metaInfo: {
    title: 'Nos Cuisine'
  },
  computed: {
    cuisines(){
      return this.$page.allCuisinePost.edges.map( edge => edge.node)
    }
  }
}
</script>

<style scoped>
  .cuisines {
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) );
  }
</style>

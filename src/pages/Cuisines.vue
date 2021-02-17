<template>
  <Layout>
    <header class="site-content__header">
      <h1>Nos cuisines</h1>
      <blockquote>
        “L’essence d’un projet, c’est l’harmonie parfaite entre l’esthétique, l’utile et le juste”
        <cite>- Frank Lloyd Wright -</cite>
      </blockquote>
    </header>

    <section class="cuisines">
      <CuisineCard v-for="(item, index) in cuisines" :key="index" :cuisine="item"/>
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

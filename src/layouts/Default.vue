<template>
  <div class="layout">
    <Header />
    <main class="site-content">
      <slot />
    </main>
    <Footer :settings="settings" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      address {
        street
        zip
        city
      }
      socials {
        name
        href
      }
    }
  }
}
</static-query>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    settings() { return this.$static.metadata.settings }
  }
};
</script>

<style>

body {
  font-family: var(--font-base);
  margin: 0;
  padding: 0;
  background-color: var(--light-color);
  line-height: 1.5;
  color: var(--dark-color);
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-heading);
}


p.lead {
  font-family: var(--font-accent);
  font-size: 1.2em;
}

a {
  color: currentColor;
  cursor: pointer;
}

img {
  max-width: 100%;
  vertical-align: bottom;
}

figure {
  margin: 0;
}
svg {
  width: 100%;
  height: 100%;
}

.layout {
  margin: auto;
}

.site-content {
  margin: auto;
  padding-left: var(--spacing);
  padding-right: var(--spacing);
  max-width: 1200px;
}

.site-content__header {
  text-align: center;
  max-width: 1040px;
  margin: auto;
}

/** Helped */
.text-center { text-align: center; }
</style>

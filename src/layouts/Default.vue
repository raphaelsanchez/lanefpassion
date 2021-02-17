<template>
  <div class="layout">
    <Header />
    <main class="site-content">
      <slot />
    </main>
    <Footer :globalSettings="globalSettings" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    globalSettings {
      address {
        street
        zip
        city
      }
      social {
        facebook
        instagram
        linkedin
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
    globalSettings() { return this.$static.metadata.globalSettings }
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
  max-width: 1440px;
}

.site-content__header {
  text-align: center;
  max-width: 1040px;
  margin: auto;
}

/** Helped */
.text-center { text-align: center; }
</style>

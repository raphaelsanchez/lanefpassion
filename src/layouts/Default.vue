<template>
  <div class="layout">
    <Header />
    <main class="site-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
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
};
</script>

<style>
:root {
  --dark-color: #010202;
  --medium-color: #F3F3F3;
  --light-color: #ffffff;
  --accent-color: #c10b25;

  --spacing: 2em;

  --font-base: 'Mulish', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  --font-accent: 'Vesper Libre', serif;
  --font-heading: 'DM Serif Display', serif;
}

html {
  font-size: 16px;
}
@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1040px) {
  html {
    font-size: 22px;
  }
}

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
  max-width: 1440px;
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

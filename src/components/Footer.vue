<template>
  <footer class="footer">
    <div class="footer-logo">
      <Logo/>
    </div>
    <div class="footer-contact"></div>
    <nav class="footer-social"></nav>
    <div class="footer-credits">© Lanef Passion</div>
  </footer>
</template>

<script>
import Logo from "@/components/Logo"
export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.footer {
  padding: 2em;
  background: var(--dark-color);
  color: var(--light-color);
}
.footer-logo {
  --logo-accent-color: var(--accent-color);
  --logo-color: var(--light-color);
  max-width: 250px;
}
</style>

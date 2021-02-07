<template>
  <header class="header">
    <g-link class="header__logo" to="/">
      <Logo />
    </g-link>
    <nav class="header__nav">
      <button class="header__nav-toggler" data-toggle="menu">Menu</button>
      <ul class="menu">
        <li class="menu__item">
          <g-link class="menu__link" to="/">Notre Passion</g-link>
        </li>
        <li class="menu__item">
          <g-link class="menu__link" to="/cuisines/">Nos cuisines</g-link>
        </li>
        <li class="menu__item">
          <g-link class="menu__link" to="/partenaires/">Nos Partenaires</g-link>
        </li>
        <li class="menu__item">
          <g-link class="menu__link" to="/contact/">Rendez-vous</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  components: {
    Logo,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing);
  margin-bottom: 20px;
}

.header__logo {
  --logo-accent-color: var(--accent-color);
  --logo-color: var(--dark-color);
  max-width: 230px;
}

.header__nav-toggler {
  padding: 1em 1.5em;
  border: 2px solid var(--dark-color);
  background-color: var(--light-color);
  font-size: 1em;
  cursor: pointer;
  text-transform: uppercase;
}

.header__nav-toggler:hover {
  background-color: var(--dark-color);
  color: var(--light-color);
}

.header__nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.header__nav .menu {
  position: fixed;
  top: 0;
  left: auto;
  right: -100%;
  margin: 0;
  padding: var(--spacing);
  background-color: var(--dark-color);
  color: var(--light-color);
}

.menu {
  list-style: none;
  padding-left: 0;
}

.menu__link {
  display: inline-block;
  padding: 0.5em 0.75em;
  text-decoration: none;
  color: currentColor;
}

.menu__link:not(:last-child) {
  margin-right: 20px;
}

.menu__link:hover,
.menu__link:focus {
  text-decoration: underline;
}

.menu__link.active--exact {
  background: #000;
  color: #fff;
}

@media (min-width: 60rem) {

  .menu {
    display: flex;
    flex-wrap: wrap;
  }

  .header__nav-toggler {
    display: none;
  }

  .header__nav .menu {
    position: static;
    background-color: var(--light-color);
    color: var(--dark-color);
  }
}
</style>
  
</style>

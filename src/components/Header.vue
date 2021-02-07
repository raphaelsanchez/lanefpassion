<template>
  <header class="header">
    <g-link class="header__logo" to="/">
      <Logo />
    </g-link>
    <button
      class="menu-toggle"
      :class="toggleNav ? 'is-active' : ''"
      aria-expanded="false"
      aria-controls="mobile-nav"
      @click="toggle"
    >
      Menu
    </button>
    <nav class="header__nav" :class="toggleNav ? 'is-visible' : ''">
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
  data() {
    return {
      toggleNav: false,
    };
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav;
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px 20px;
  padding: var(--spacing);
  max-width: 1440px;
  background: white;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.header__logo {
  --logo-accent-color: var(--accent-color);
  --logo-color: var(--dark-color);
  max-width: 100px;
}

.menu-toggle {
  padding: 1em 1.5em;
  border-color: var(--dark-color);
  border-style: solid;
  border-width: 0 0 0 2px;
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

.header__nav {
  position: absolute;
  top: 100%;
  left: 10px;
  right: 10px;
  margin: 0;
  padding: var(--spacing);
  background-color: var(--dark-color);
  color: var(--light-color);
  transition: all 300ms ease-in-out;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transform: scaleY(0);
  transform-origin: top center;
}
.header__nav.is-visible {
  transform: scaleY(1)
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

  .header {
    margin: 0 auto 20px;
    box-shadow: none;
  }
  .header__logo {
    max-width: 200px;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
  }

  .menu-toggle {
    display: none;
  }

  .header__nav {
    position: static;
    background-color: var(--light-color);
    color: var(--dark-color);
    transform: scaleY(1);
  }
}

</style>

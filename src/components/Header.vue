<template>
  <header class="header">
    <g-link class="header__logo" to="/">
      <Logo />
    </g-link>

    <button class="menu-toggle" :class="toggleMenuStatus()"
      aria-expanded="false"
      aria-controls="mobile-nav"
      @click="toggleMenu"
    >
      <span v-if="isToggleMenu">Fermer</span>
      <span v-else>Menu</span>
    </button>
    <nav class="header__nav" :class="toggleMenuStatus()">
      <ul class="menu">
        <li class="menu__item">
          <g-link class="menu__link" to="/cuisines/">Nos cuisines</g-link>
        </li>
        <li class="menu__item">
          <g-link class="menu__link" to="/partenaires/">Nos partenaires</g-link>
        </li>
        <li class="menu__item">
          <g-link class="menu__link menu__accent" to="/contact/">Rendez-vous</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'Header',
  components: {
    Logo,
  },
  data() {
    return {
      isToggleMenu: false,
      quote: 'hello',
    }
  },
  methods: {
    toggleMenu() {
      this.isToggleMenu = !this.isToggleMenu
    },
    toggleMenuStatus() {
      return !this.isToggleMenu || 'is-active'
      // return this.isToggleMenu ? 'is-active' : null
      // if (this.isToggleMenu ) return 'is-active'
    },
  },
}
</script>

<style scoped>
.header {
  position: relative;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1em var(--spacing);
  max-width: 1440px;
}

.header__logo {
  --logo-accent-color: var(--accent-color);
  --logo-color: var(--dark-color);
  width: 100%;
  max-width: 100px;
}

.menu-toggle {
  position: relative;
  z-index: 9000;
  padding: 1em 0 1em 1em;
  border: none;
  background-color: transparent;
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
  left: 0;
  right: 0;
  margin: 0;
  padding: 1em var(--spacing);
  background-color: var(--light-color);
  transition: all 300ms ease-in-out;
  transform: scaleY(0);
  transform-origin: top center;
}
.header__nav.is-active {
  transform: scaleY(1);
  box-shadow: 0 80px 80px rgba(0,0,0,.2);
}

.header__nav .menu {
  margin-left: auto;
}
.menu {
  list-style: none;
  padding-left: 0;
}

.menu__item {
  margin: 0 .5em;
}

.menu__link {
  --link-background: transparent;
  --link-color: var(--dark-color);
  display: inline-block;
  padding: 1em;
  text-decoration: none;
  font-weight: bold;
  color: var(--link-color);
  background-color: var(--link-background);
  transition: var(--transition);
}

.menu__link:not(:last-child) {
  margin-right: 20px;
}

.menu__link:hover,
.menu__link:focus,
.menu__link.active {
  --link-background: var(--dark-color);
  --link-color: var(--light-color);
}

.menu__accent:hover,
.menu__accent.active {
  background-color: var(--accent-color);
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

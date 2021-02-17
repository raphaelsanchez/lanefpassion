<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer-logo">
        <Logo />
      </div>
      <div class="footer-contact">
        <p itemprop="street-address">
          {{globalSettings.address.street}}<br />
          {{globalSettings.address.zip}} {{globalSettings.address.city}}
        </p>
        <p>
          <a href="tel:0235455445">02 35 45 54 45</a>
          <br />
          <a href="mailto:contact@lanef-passion.fr">contact@lanef-passion.fr</a>
        </p>
      </div>
      <nav class="footer-social">
        <a v-if="globalSettings.social.facebook" :href="globalSettings.social.facebook">Facebook</a>
        <a v-if="globalSettings.social.instagram" :href="globalSettings.social.instagram">Instagram</a>
        <a v-if="globalSettings.social.linkedin" :href="globalSettings.social.linkedin">LinkedIn</a>
      </nav>
      <div class="footer-credits">
        {{ new Date().getFullYear() }}
        © Lanef Passion
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'Footer',
  props: {
    globalSettings: {
      type: Object,
      default: {},
    }
  },
  components: {
    Logo,
  },
}
</script>

<style scoped>
.footer {
  padding: 2em;
  background: var(--dark-color);
  color: var(--light-color);
  font-size: 0.8em;
  text-align: center;
}
.footer-logo svg {
  --logo-accent-color: var(--accent-color);
  --logo-color: var(--light-color);
  max-width: 200px;
}

.footer__inner {
  margin: auto;
  max-width: 1200px;
}

.footer-contact {
  text-transform: uppercase;
}

.footer-social a {
  padding: calc(var(--spacing) / 2);
}

.footer-credits {
  margin-top: var(--spacing);
  text-align: center;
}

@media (min-width: 40rem) {
  .footer {
    text-align: left;
  }
  .footer__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .footer-logo,
  .footer-contact,
  .footer-social {
    padding: var(--spacing);
    flex: 1 1 33%;
  }
  .footer-contact {
    flex: 0 0 auto;
  }
  .footer-social {
    text-align: right;
  }
  .footer-credits {
    flex: 1 1 100%;
  }
}
</style>

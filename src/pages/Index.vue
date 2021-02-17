<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <figure class="bottom-decoration">
      <g-image alt="Example image" src="/uploads/smt-1.jpg" />
    </figure>

    <section class="home-section-1">
      <div class="block-media-text">
        <div class="block-media-text__media">
          <img src="/uploads/chateau-1.jpg" alt="" />
        </div>
        <div class="block-media-text__text">
          <h2 class="block-media-text__title">
            Tout doit être fait avec passion.
          </h2>
          <p>Cuisiner c'est délivrer une émotion</p>
          <p>
            Le partage, la convivialité, le bien-être en sont les maîtres-mots.
            Ainsi, nous réalisons nos cuisines sur mesure afin de vous offrir
            tous les avantages d'une cuisine professionnelle pensée et adaptée
            pour vous et votre cadre de vie.
          </p>
        </div>
      </div>
    </section>

    <figure class="top-decoration">
      <g-image alt="Example image" src="/uploads/plc10-1.jpg" />
    </figure>

    <section class="home-section-2">
      <div class="block-media-text">
        <div class="block-media-text__media">
          <img src="/uploads/chateau-1.jpg" alt="" />
        </div>
        <div class="block-media-text__text">
          <h2 class="block-media-text__title">L’exception est la règle.</h2>
          <p>
            Le concept, une cuisine d’exception pensée pour des particuliers.
          </p>
          <p>
            Chaque nouveau projet commence par une feuille blanche : votre
            habitation, vos goûts, vos envies, votre style de vie. Tous ces
            éléments sont pris en compte afin de concevoir une cuisine pour
            l'espace dédié et les personnes qui l'utiliseront. L'ensemble du
            mobilier est dessiné avec précision afin que les usages soient
            optimisés et agréables.
          </p>
          <p>Chaque cuisine est unique, comme vous.</p>
          <g-link class="button" to="/cuisines/">Découvrez nos cuisines</g-link>
        </div>
      </div>
    </section>

    <section class="home-section-3">
      <div class="block-text">
        <h2 class="block-media-text__title">L’amour du savoir-faire</h2>
        <p>
          Le prestige et la crédibilité de Lanef Passion reposent sur notre
          gestion complète de votre projet.
        </p>

        <g-image alt="Example image" src="/uploads/savoir-faire.jpg" />

        <p>
          De la conception à la réception de chantier, nous souhaitons que la
          création de votre cuisine soit une expérience agréable. Notre histoire
          a commencé avec les cuisines professionnelles : plusieurs décennies
          d'expérience nous ont apporté le souci de l'implantation et de
          l'ergonomie, l'amour des matériaux nobles et le goût de l'innovation
          par le choix d'un électroménager haut de gamme pour une clientèle
          avertie et exigeante.
        </p>
      </div>
    </section>

    <figure class="bottom-decoration">
      <g-image alt="Example image" src="/uploads/plc10-1.jpg" />
    </figure>

    <section class="home-section-4">
      <div class="block-media-text">
        <div class="block-media-text__media">
          <g-image alt="Example image" src="/uploads/chateau-3.jpg" />
        </div>
        <div class="block-media-text__text">
          <h2 class="block-media-text__title">La fabrication</h2>
          <p>
            Les détails font la perfection, et la perfection n’est pas un
            détail.
          </p>
          <p>
            Nous allions artisanat traditionnel et le meilleur de la technologie
            afin de vous offrir une cuisine d'exception. Les matériaux nobles se
            mélangent dans nos projets : inox, minéral et essences de bois. Nos
            artisans, implantés en Normandie, sont des passionnés avec lesquels
            nous travaillons depuis de nombreuses décennies.
          </p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Tout doit être fait avec passion.',
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.block-media-text {
  display: grid;
  grid-gap: var(--spacing);
  max-width: 980px;
  margin: var(--spacing) auto;
}
.block-media-text__media {
}
.block-media-text__text {
}

@media (min-width: 40rem) {
  .block-media-text {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

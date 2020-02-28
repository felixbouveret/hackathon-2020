<template>
  <div class="home">
    <div class="inner">
      <h1>Bonjour 👋</h1>
      <p>Je me présente, je suis Timelow !</p>
      <p>Es -tu prêt à répondre à quelques questions à propos de tes habitudes quotidiennes sur le web ? Ca ne te
        prendra pas plus d'une minute et ça te fera gagner un temps fou pour la suite 💪</p>
      <nuxt-link to="/steps"> Allons-y ! </nuxt-link>
      <div class="info">
        <p>Je ne suis pas la pour te juger ni collecter tes données. Elles ne seront conservées que si tu le décides <img class="emoji_apple" src="img/smiley.png" alt="">
        </p>
      </div>
    </div>
    <img src="~/assets/images/home-left.svg" class="illustration left">
    <img src="~/assets/images/home-right.svg" class="illustration right">
  </div>
</template>

<script>
import fmButton from '~/components/form/fm-button'

export default {
  components: {
    fmButton
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 50px;
  font-weight: 600;
}
p {
  font-size: 28px;
  font-weight: 300;
  line-height: 160%;
}
.home {
  position: relative;
  background-color: $skin;
  height: 100vh;
  min-width: 700px;

  .inner {
    height: 100%;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 116px 0;
    text-align: center;

    .info {
      max-width: 500px;
      margin: 0 auto;
      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 150%;
      }
    }
  }
  .illustration {
    position: absolute;
    bottom: 0;
    &.left {
      left: 0;
      width: 230px;
    }
    &.right {
      right: 0;
      bottom: 32px;
      width: 200px;
    }
  }
  a {
    display: block;
    padding: 24px 64px;
    background-color: $orange;
    border-radius: 8px;
    font-size: 22px;
    font-weight: 500;
    color: #000000;
    text-decoration: none;
  }
}
</style>

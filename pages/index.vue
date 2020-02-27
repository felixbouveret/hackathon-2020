<template>
  <div class="no-device">
    <h1 class="content">Bonjour 👋</h1>
    <p class="content">Je me présente, je suis Timlow ! <br> Es-tu prêt à répondre à quelques questions à propos de tes habitudes quotidiennes sur le web ?</p>
    <p class="content">Ça ne te prendra pas plus d'une minute et ça te fera gagner un temps fou par la suite 💪</p>
    <nuxt-link to="/steps"> Go </nuxt-link>
  </div>
</template>

<script>
import fmButton from '~/components/form/fm-button'

export default {
  components: {
    fmButton
  },
  created() {
    console.log(this.$store.state);
  }
}
</script>

<style lang="scss"></style>

<template>
  <div class="report-container" v-if="report">
    <accords :accords="report.paris" />
    <representation :datas="representation" />
    <consos :consos="consommations" />
    <solutions />
    <pied-de-page />
  </div>
  <div v-else class="loader">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="48px"
      height="60px"
      viewBox="0 0 24 30"
      style="enable-background:new 0 0 50 50;"
      xml:space="preserve"
    >
      <rect
        x="0"
        y="0"
        width="4"
        height="10"
        fill="#333"
        transform="translate(0 12.8998)"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
      <rect
        x="10"
        y="0"
        width="4"
        height="10"
        fill="#333"
        transform="translate(0 0.433533)"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
      <rect
        x="20"
        y="0"
        width="4"
        height="10"
        fill="#333"
        transform="translate(0 13.7669)"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
    </svg>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import accords from '~/components/dashboard/accords'
import representation from '~/components/dashboard/representation'
import consos from '~/components/dashboard/consos'
import solutions from '~/components/dashboard/solutions'
import PiedDePage from '~/components/dashboard/footer'

export default {
  name: 'report',
  components: {
    accords,
    representation,
    consos,
    solutions,
    PiedDePage
  },
  data() {
    return {
      report: undefined
    }
  },
  methods: {
    ...mapActions({
      generateReport: 'generateReport'
    })
  },
  computed: {
    representation() {
      if (!this.report) {
        return false
      } else {
        const arbre = {
          data: this.report.arbre,
          image: require('~/assets/images/illus/arbre.svg')
        }
        const avion = {
          data: this.report.avion,
          image: require('~/assets/images/illus/avion.svg')
        }
        const voiture = {
          data: this.report.voiture,
          image: require('~/assets/images/illus/voiture.svg')
        }
        const train = {
          data: this.report.train,
          image: require('~/assets/images/illus/train.svg')
        }
        return [arbre, avion, voiture, train]
      }
    },
    consommations() {
      if (!this.report) {
        return false
      } else {
        this.report.consos.forEach(conso => {
          const image = require(`~/assets/images/illus/${conso.name}.svg`)
          conso.image = image
        })
        return this.report.consos
      }
    }
  },
  created() {
    this.generateReport().then(() => {
      setTimeout(() => {
        this.report = this.$store.state.report
      }, 1500)
    })
  }
}
</script>

<style lang="scss">
.report-container {
  background-color: $skin;
  padding: 50px 0 100px 0;
}

.loader {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg path,
  svg rect {
    fill: $orange;
  }
}
</style>

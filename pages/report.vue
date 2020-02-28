<template>
  <div class="report-container" v-if="report">
    <accords :accords="report.paris" />
    <representation
      :datas="[report.arbre, report.avion, report.voiture, report.train]"
    />
    <consos :consos="report.consos" />
    <solutions />
  </div>
  <div v-else>Chargement...</div>
</template>

<script>
import { mapActions } from 'vuex'
import accords from '~/components/dashboard/accords'
import representation from '~/components/dashboard/representation'
import consos from '~/components/dashboard/consos'
import solutions from '~/components/dashboard/solutions'

export default {
  name: 'report',
  components: {
    accords,
    representation,
    consos,
    solutions
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
  created() {
    this.generateReport().then(() => {
      this.report = this.$store.state.report
    })
  }
}
</script>

<style lang="scss">
.report-container {
  background-color: $skin;
  padding: 50px 0 100px 0;
}
</style>

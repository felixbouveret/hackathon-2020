<template>
  <div class="report-container" v-if="report">
    <accords :accords="report.paris" />
    <representation :datas="[report.arbre, report.avion, report.voiture, report.train]" />
  </div>
  <div v-else>Chargement...</div>
</template>

<script>
import { mapActions } from 'vuex'
import accords from '~/components/dashboard/accords'
import representation from '~/components/dashboard/representation'

export default {
  name: 'report',
  components: {
    accords,
    representation
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

<style></style>

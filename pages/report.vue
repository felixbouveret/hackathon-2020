<template>
  <div class="report-container" v-if="report">
    <accords :accords="report.paris" />
  </div>
  <div v-else>Chargement...</div>
</template>

<script>
import { mapActions } from 'vuex'
import accords from '~/components/dashboard/accords'

export default {
  name: 'report',
  components: {
    accords
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

<template>
  <div class="report-container" v-if="report">
    <h1 class="content">report</h1>
  </div>
  <div v-else>Chargement...</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'report',
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

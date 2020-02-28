<template>
  <section>
    <div class="inner">
      <div class="energy-wrapper">
        <div class="flex-energy-app">
          <div class="energy-app" v-for="(conso, index) in consos" :key="index">
            <div class="icon-energy-app"></div>
            <div class="text-energy-app">
              <p class="name-energy-app">
                {{ conso.name.charAt(0).toUpperCase() + conso.name.slice(1) }}
              </p>
              <p class="txt-hour-energy-app">À raison d’1h par jour</p>
            </div>
            <p class="percent-energy-app">{{ conso.percent }}%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Accords',
  props: {
    consos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>

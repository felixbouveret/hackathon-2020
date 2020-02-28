<template>
  <section>
    <div class="inner">
      <h2>Tes consommations</h2>
      <div class="energy-wrapper">
        <div class="flex-energy-app">
          <div class="energy-app" v-for="(conso, index) in consos" :key="index">
            <div class="icon-energy-app">
              <img :src="conso.image" alt="Illustration" />
            </div>
            <div class="text-energy-app">
              <p class="name-energy-app">
                {{ conso.name.charAt(0).toUpperCase() + conso.name.slice(1) }}
              </p>
              <p class="txt-hour-energy-app">
                À raison de {{ getTime(conso.time) }} par jour
              </p>
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
  },
  methods: {
    getTime(time) {
      return time < 1 ? `${time * 60}min` : `${time}h`
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: $purple-light;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 2em;
}

.energy-wrapper {
  width: 80%;
  margin: auto;
  .flex-energy-app {
    display: flex;
    flex-wrap: wrap;
    margin-right: -2.5%;
    .energy-app {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 116px;
      background-color: white;
      border-radius: $radius;
      width: 47.5%;
      margin-right: 2.5%;
      margin-bottom: 2.5%;
      padding: 1em;
      .icon-energy-app {
        width: 68px;
        height: 100%;
        border-radius: $radius;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 80%;
          margin-right: 10px;
        }
      }
      .text-energy-app {
        .name-energy-app {
          font-size: 20px;
          color: $purple;
          margin-bottom: 8px;
        }
        .txt-hour-energy-app {
          color: $h2-text;
        }
      }
      .percent-energy-app {
        color: $h2-text;
      }
    }
  }

  margin-bottom: 3em;
}
</style>

<template>
  <section class="representation">
    <div class="inner">
      <h2>Sur une année, cela représente...</h2>

      <div class="flex-cards-exemple">
        <div v-for="(repr, index) in datas" :key="index" class="flex-cards">
          <div
            class="view"
            :style="{ backgroundImage: `url('${repr.image}')` }"
          ></div>
          <p>
            {{ repr.data }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.representation {
  margin-bottom: 70px;
}
.flex-cards-exemple {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3em;

  .flex-cards {
    display: flex;
    flex-direction: column;
    background-color: $orange;
    height: 326px;
    width: 23%;
    border-radius: 8px;
    padding: 32px;

    .view {
      width: 100%;
      height: 100%;
      max-height: 200px;
      background-repeat: no-repeat;
      background-position: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    p {
      color: $purple;
      min-height: 50px;
      text-align: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 136%;
      font-weight: 600;
    }
  }
}
h2 {
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: $purple-light;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 2em;
}

img {
  max-height: 50%;
}
</style>

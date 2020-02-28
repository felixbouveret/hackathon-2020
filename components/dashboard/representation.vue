<template>
  <section class="representation">
    <div class="inner">
      <h2>Sur une année, cela représente...</h2>

      <div class="flex-cards-exemple">
        <div v-for="(data, index) in datas" :key="index" class="flex-cards">
          <div class="view">
            <img src="" alt="" />
          </div>
          <p>
            {{ data }}
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
  }
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
</style>

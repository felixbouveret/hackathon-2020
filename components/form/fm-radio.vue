<template>
  <div class="radios-container" :class="isModal ? 'isModal' : ''">
    <div class="radio" v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        :id="option.id"
        :value="option.value"
        v-model="returnedValue"
      />
      <label :for="option.id">
        <img
          v-if="option.image"
          :src="getImagePath(option.image)"
          alt="Illustration"
        />
        <span>{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: [],
      require: true
    },
    isModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      returnedValue: ''
    }
  },
  watch: {
    returnedValue() {
      this.$emit('emitValue', this.returnedValue)
    }
  },
  methods: {
    getImagePath(imageName) {
      const img = require(`~/assets/images/illus/${imageName}.svg`)
      return img
    }
  }
}
</script>

<style lang="scss" scoped>
.radios-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 64px 0;
  max-width: $inner;
  width: 95%;
  margin: 0 auto;

  &.isModal {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    max-width: 872px;
    justify-content: initial;
    align-items: initial;
    height: auto;

    .radio {
      max-width: none;
      max-height: none;
      height: auto;
      margin: 0;
    }

    label {
      padding: 52px 0;
    }
  }
}
.radio {
  width: 100%;
  height: 100%;
  max-width: 370px;
  max-height: 500px;
  margin: 0 16px;
}
label {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 4px solid $skin;
  box-shadow: 0 0 0 0 rgba($color: $skin, $alpha: 0.4);
  background-color: $skin;
  transition: box-shadow 0.3s;
  position: relative;

  span {
    color: black;
    align-self: flex-end;
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 140%;
    font-weight: 600;
    letter-spacing: 2px;
    position: absolute;
    bottom: 20px;
  }
}
input {
  display: none;
  appearance: none;
  &:checked + label {
    border-color: black;
    box-shadow: 0 0 0 8px rgba($color: $skin, $alpha: 0.4);
  }
}
</style>

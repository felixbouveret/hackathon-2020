<template>
  <section>
    <div class="inner">
      <div class="paris-accord-content">
        <h1>Les accords de Paris</h1>

        <p class="paris-accord-desc">
          Selon les accords de Paris, si on veut limiter la hausse des
          températures à 2°C, chacun d'entre nous dispose d'un crédit de 9kg de
          CO2 par jour.
        </p>

        <div class="paris-accord-percent">
          <p>Votre consommation numérique représente</p>
          <span class="percent">{{ Math.round(accords) }}%</span>
          <p>de votre crédit journalier</p>
        </div>
      </div>
      <p class="annonce">
        Si tu veux découvrir à quoi correspond le reste de ta consommation, je
        t’invite à visiter le site de Futur.eco
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Accords',
  props: {
    accords: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  font-size: 42px;
  margin-bottom: 15px;
}

.paris-accord-content {
  background-color: $purple;
  border-radius: $radius;
  padding: 2em;
  text-align: center;
  line-height: 1.5;
  & > p {
    color: white;
    margin-bottom: 3em;
  }
  .paris-accord-percent {
    color: white;
    & > p {
      margin: 0;
      font-weight: medium;
    }
    .percent {
      font-weight: 500;
      font-size: 100px;
    }
  }
}

.annonce {
  margin: auto;
  font-size: 17px;
  color: $h2-text;
  text-align: center;
  margin: 1em 1em 5em 1em;
  font-weight: normal;
}
</style>

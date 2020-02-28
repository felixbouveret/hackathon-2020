<template>
  <section class="solutions">
    <div class="inner">
      <h2>La solution de Timelow</h2>
      <p>Timelow c’est une extension disponible sur ton navigateur préféré. Avec moi tu pourras :</p>

      <div class="solution-list">
        <div class="solu">
          <h3>1.</h3>
          <p class="solu-desc">
            Décider du temps qui te paraît raisonnable de passer sur chaque applications
          </p>
        </div>
        <div class="solu">
          <h3>2.</h3>
          <p class="solu-desc">
            Définir une plage horaire sur laquelle tu ne pourras pas utiliser certains sites
          </p>
        </div>
        <div class="solu">
          <h3>3.</h3>
          <p class="solu-desc">
            Retrouver de manière simple et illustrée ta consommation web
          </p>
        </div>
        <div class="solu">
          <h3>4.</h3>
          <p class="solu-desc">
            Suivre tes progrès par rapport à tes réponses d’aujourd’hui
          </p>
        </div>
      </div>
      <div class="extension">
        <div class="desc">
          <h3>L’extension qui te fait gagner du temps</h3>
          <p></p>
        </div>
        <div class="view">
          <img src="~/assets/images/dashboard/extension.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Accords',
}
</script>

<style lang="scss" scoped>
.solutions {
  background-color: $orange;
  padding: 64px 0;
  position: relative;
  margin-bottom: 200px;
}
h2 {
  text-align: center;
  font-family: 'Recoleta', sans-serif;
  font-size: 38px;
  color: $purple;
  margin-bottom: 12px;

  & + p {
    font-size: 18px;
    text-align: center;
    color: rgba(59, 36, 123, 0.6);
    max-width: 600px;
    margin: 0 auto 32px;
  }
}

.solution-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-bottom: 88px;

  .solu {
    text-align: center;
    h3 {
      display: inline-block;
      position: relative;
      font-family: 'Recoleta', sans-serif;
      font-size: 38px;
      z-index: 1;
      margin-bottom: .5em;

      &::before {
        content: '';
        position: absolute;
        width: 32px;
        height: 32px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.55);
        z-index: -1;
        transform: translate(-50%, -50%);
        left: 70%;
        top: 60%;
      }
    }
  }
}

.extension {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  position: absolute;
  transform: translate(-50%, -20%);
  left: 50%;

  h3 {
    font-size: 32px;
    font-family: 'Recoleta', sans-serif;
  }
  .view {
    height: 200px;
    margin-left: 32px;

    img {
      height: 100%;
    }
  }
}
</style>

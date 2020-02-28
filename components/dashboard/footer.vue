<template>
  <section>
    <div class="inner">
      <div class="thanks-part">
        <h2>Merci!</h2>
        <p class="paris-accord-desc">
          Timlow t’a convaincu ? Saisis ton adresse mail pour retrouver ces
          infos et voir ta progression quand tu installeras l’extension 🙂
        </p>
      </div>

      <form class="form-extension">
        <input type="text" placeholder="Votre adresse E-mail" />
        <input type="button" value="Envoyer" />
      </form>

      <p class="annonce">
        Ne t’inquiète pas on ne conservera pas ton adresse pour t’envoyer des
        mails.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PiedDePage'
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-family: 'Recoleta', sans-serif;
  font-size: 38px;
  color: $purple;
  margin-bottom: 12px;
}

.thanks-part {
  text-align: center;
  width: 80%;
  display: block;
  margin: 0 auto;
  line-height: 1.5;
  & > p {
    color: $desc-text;
    margin-bottom: 3em;
  }
}

.form-extension {
  display: flex;
  width: 80%;
  margin: auto;
  overflow: hidden;
  border-radius: $radius;
  border: 0.1px solid $h2-text;
  input[type='text'] {
    font-family: 'Work Sans';
    font-size: 24px;
    padding: 1.5em 1em;
    width: 80%;
    border: 0px solid $desc-text;
    outline: none;
    font-weight: normal;
  }
  input[type='button'] {
    appearance: none;
    font-family: 'Work Sans';
    font-weight: 500;
    padding: 1.5em 2em;
    font-size: 24px;
    background-color: $orange;
    color: black;
    border: 0px solid $main-color;
  }
}

.annonce {
  margin: auto;
  font-size: 17px;
  color: $purple-light;
  text-align: center;
  margin: 1em 1em 5em 1em;
  font-weight: normal;
}
</style>

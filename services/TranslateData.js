import vulgTrain from './json/vulgarisation.js'

// Constante de consomation selon les sites visités
// ------------------------------------------------

//Les constantes sont exprimées en mo / h
const CONSO_MOY = {
  FACEBOOK: 720,
  INSTAGRAM: 720,
  TWITTER: 720,
  LINKEDIN: 3240,
  TWITCH: 960,
  YOUTUBE: 300,
  NETFLIX: 1000,
  SPOTIFY: 1140,
  DEEZER: 1140,
  SOUNDCLOUD: 1140,
  APPLEMUSIC: 1140,
  AMAZONPRIME: 960,
  STREAMING: 1000,
  DOWNLOAD: 1000,
  MAIL: 1000,
  GOOGLEMAP: 1080,
  WAZE: 0.69,
  JEUXVIDEO: 2000,
  AUTRE: 1000
}

// Tableau des vulgarisations
// -----------------------------

const IMPACT_EX_TRAIN = vulgTrain.array
const IMPACT_EX_VOITURE = 162
const IMPACT_EX_AVION = 765300
const IMPACT_EX_ARBRE = 137

// Ratio de conversion mo => g
// -----------------------------
const RATIO_G = 0.669

// Déclaration de la classe de traduction
// ---------------------------------------

export default class TranslateData {
  constructor(dataObject) {
    // dataObject => @object
    this.data = dataObject
    console.log(this.data)
  }

  // Methode d'initialisation
  // -----------------------------------------
  static do = dataObject => {
    let newClass = new this(dataObject)

    return newClass.totalConso()
  }

  // Methodes d'affichage
  // ----------------------------------------------------

  percentParis = () => {
    let percent = (this.total * RATIO_G * 100) / 9000
    return percent
  }

  randomSentenceTrain = () => {
    let index = Math.floor(Math.random() * IMPACT_EX_TRAIN.length)
    let choosenExemple = IMPACT_EX_TRAIN[index]
    let ratioExemple = Math.round(
      this.gTotalByYear / 1000 / choosenExemple.value
    )
    return 'correspond à ' + ratioExemple + ' ' + choosenExemple.label
  }

  randomSentenceAvion = () => {
    let nbTrajet = Math.round(this.gTotalByYear / IMPACT_EX_AVION)
    return 'correspond à ' + nbTrajet + ' trajet Paris / Tokyo'
  }

  randomSentenceArbre = () => {
    let nbJour = Math.round(this.gTotalByYear / IMPACT_EX_ARBRE)
    let nbAnnee = Math.round(nbJour / 365)
    return (
      'mettra ' + nbJour + ' jours à absorber le CO2 (soit ' + nbAnnee + ' ans)'
    )
  }

  randomSentenceVoiture = () => {
    let nbKm = Math.round(this.gTotalByYear / IMPACT_EX_VOITURE)
    return 'correspond à ' + nbKm + ' km en voiture'
  }

  sortedConso = () => {
    let arraySort = []
    for (let key in this.data) {
      //Si on entre dans les booléen on prend juste la valeur
      if (key == 'mail' || key == 'jeuxVideo') {
        if (this.data[key]) {
          arraySort.push({
            name: key,
            octet: CONSO_MOY[key.toUpperCase()],
            time: 1
          })
        }

        // Sinon on parcour les différent sous objet
      } else {
        for (let secondKey in this.data[key]) {
          arraySort.push({
            name: secondKey,
            octet:
              CONSO_MOY[secondKey.toUpperCase()] * this.data[key][secondKey],
            time: this.data[key][secondKey]
          })
        }
      }
    }

    // On tri le tableau
    let arraySorted = arraySort.sort(function(a, b) {
      return b['octet'] - a['octet']
    })

    return arraySorted
  }

  // PARTIE LOGIQUE
  // -----------------------------------------------------------------

  // Calcul du total des consomation , retourne la conso total sur 1J
  // -----------------------------------------------------------------
  totalConso = () => {
    let total = this.data.mail ? CONSO_MOY.MAIL : 0
    total += this.data.jeuxVideo ? CONSO_MOY.JV : 0

    total +=
      this.consoFILMCalc() +
      this.consoMUSICCalc() +
      this.consoNAVCalc() +
      this.consoRSCalc()

    //Definition du total sur 1 jour et sur 1 ans
    this.total = total
    this.gTotal = total * RATIO_G

    this.totalByYear = total * 365
    this.gTotalByYear = total * RATIO_G * 365

    return this
  }

  // Calcul du total des conso sur Réseau social
  // --------------------------------------------
  consoRSCalc = () => {
    let consoRS = 0
    for (let key in this.data.reseauSociaux) {
      let upperProp = key.toUpperCase()
      consoRS += this.data.reseauSociaux[key] * CONSO_MOY[upperProp]
    }

    return consoRS
  }

  // Calcul du total des conso sur site de musique (streaming)
  // ----------------------------------------------------------
  consoMUSICCalc = () => {
    let consoMUSIC = 0
    for (let key in this.data.music) {
      let upperProp = key.toUpperCase()
      consoMUSIC += this.data.music[key] * CONSO_MOY[upperProp]
    }

    return consoMUSIC
  }

  // Calcul du total des conso sur streming film
  // --------------------------------------------
  consoFILMCalc = () => {
    let consoFILM = 0
    for (let key in this.data.films) {
      let upperProp = key.toUpperCase()
      consoFILM += this.data.films[key] * CONSO_MOY[upperProp]
    }

    return consoFILM
  }

  // Calcul du total des conso sur les app de navigation
  // ----------------------------------------------------
  consoNAVCalc = () => {
    let consoNAV = 0
    for (let key in this.data.navigation) {
      let upperProp = key.toUpperCase()
      consoNAV += this.data.navigation[key] * CONSO_MOY[upperProp]
    }

    return consoNAV
  }
}

import TranslateData from './TranslateData.js';
var testData = {

    reseauSociaux : {
        facebook : 1,
    },

    music : {
        spotify : 5
    },

    mail : true,

    films : {
        youtube : 0.15
    },

    navigation : {
    },

    jeuxVideo : false

}
let test = TranslateData.do(testData);
console.log(
        "Total : " + test.gTotalByYear +"g de CO2" + "\r\n\r\n"
        + "Avion : " + test.randomSentenceAvion() + "\r\n"
        + "Train : " + test.randomSentenceTrain() + "\r\n"
        + "Voiture : " + test.randomSentenceVoiture() + "\r\n"
        + "Arbre : " + test.randomSentenceArbre() + "\r\n"
    );


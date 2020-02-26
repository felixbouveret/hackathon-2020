import TranslateData from './TranslateData.js';
var testData = {

    reseauSociaux : {
        facebook : 4
    },

    music : {

    },

    mail : false,

    films : {
        youtube : 0.15
    },

    navigation : {
    },

    jeuxVideo : false

}
console.log(
    TranslateData.do(testData).randomSentence()
    );


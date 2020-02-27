import TranslateData from './TranslateData.js';
var testData = {

    reseauSociaux : {
        linkedin : 2,
        facebook : 2,
        twitter : 2,
        instagram : 4
    },

    music : {

    },

    mail : true,

    films : {
        youtube : 0.15
    },

    navigation : {
    },

    jeuxVideo : false

}
console.log(
    TranslateData.do(testData).sortedConso()
    );


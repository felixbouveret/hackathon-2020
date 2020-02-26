import TranslateData from './TranslateData.js';
var testData = {

    reseauSociaux : {
        facebook : 0.2,
        instagram : 0.5,
    },

    music : {
        spotify : 3
    },

    mail : false,

    films : {
        netflix : 0.5
    },

    navigation : {
    },

    jeuxVideo : false

}
console.log(
    TranslateData.do(testData)
    );


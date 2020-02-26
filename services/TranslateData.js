// Constante de consomation selon les sites visités
// ------------------------------------------------

//Les constantes sont exprimées en mo / h 
const CONSO_MOY = {

     FACEBOOK        :   720, 
     INSTAGRAM       :   720, 
     TWITTER         :   720, 
     LINKEDIN        :   3240, 
     TWITCH          :   960, 
     YOUTUBE         :   300, 
     NETFLIX         :   1000, 
     SPOTIFY         :   1140, 
     DEEZER          :   1140, 
     SOUNDCLOUD      :   1140, 
     APPLEMUSIC      :   1140, 
     AMAZONPRIME     :   960, 
     STREAMING       :   1000, 
     DOWNLOAD        :   1000, 
     MAIL            :   1000, 
     GOOGLEMAP       :   1080, 
     WAZE            :   0.69, 
     JV              :   2000
}


// Déclaration de la classe de traduction 
// ---------------------------------------

export default class TranslateData{
    constructor(dataObject) {

        // dataObject => @object 
        this.data = dataObject;
        console.log(this.data);
        

    }

    // Methode d'initialisation
    // -----------------------------------------
    static do = (dataObject) => {

        let newClass = new this(dataObject);
        
        return newClass.totalConso().percentParis();  

    }

    percentParis = () => {
        let percent = (this.total * 0.669) * 100 / 9000;
        return percent;
    }

    // Calcul du total des consomation , retourne la conso total sur 1J
    // -----------------------------------------------------------------
    totalConso = () => {
        
        let total = this.data.mail ? CONSO_MOY.MAIL : 0;
        total += this.data.jeuxVideo ? CONSO_MOY.JV : 0;

        total += (this.consoFILMCalc() + this.consoMUSICCalc() + this.consoNAVCalc() + this.consoRSCalc());
        this.total = total;
        return this;
    }

    // Calcul du total des conso sur Réseau social
    // --------------------------------------------
    consoRSCalc = () => {
        let consoRS = 0;
        for(let key in this.data.reseauSociaux) {

            let upperProp = key.toUpperCase();
            consoRS += this.data.reseauSociaux[key] * CONSO_MOY[upperProp];
        }

        return consoRS;
    }

    // Calcul du total des conso sur site de musique (streaming)
    // ----------------------------------------------------------
    consoMUSICCalc = () => {
        let consoMUSIC = 0;
        for(let key in this.data.music) {

            let upperProp = key.toUpperCase();
            consoMUSIC += this.data.music[key] * CONSO_MOY[upperProp];
        }

        return consoMUSIC;
    }

    // Calcul du total des conso sur streming film
    // --------------------------------------------
    consoFILMCalc = () => {
        let consoFILM = 0;
        for(let key in this.data.films) {

            let upperProp = key.toUpperCase();
            consoFILM += this.data.films[key] * CONSO_MOY[upperProp];
        }

        return consoFILM;
    }

    // Calcul du total des conso sur les app de navigation
    // ----------------------------------------------------
    consoNAVCalc = () => {
        let consoNAV = 0;
        for(let key in this.data.navigation) {

            let upperProp = key.toUpperCase();
            consoNAV += this.data.navigation[key] * CONSO_MOY[upperProp];
        }

        return consoNAV;
    }


}
function videoPlay(id) {
    const urlSecreta = "https://platziurlsecreta.com/" + id;
    console.log("Se esta reproduciendo desde la url: " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziurlsecreta.com/" + id;
    console.log("Pausamos desde la url: " + urlSecreta);
}



export class PlatziClass {

    #privateField;

    constructor({
        name,
        videoID
    }) {
        this.nanme = name;
        this.videoID = videoID;
        this.#privateField = 2;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }

    get privateField() {
        return "I THINK IS " + this.#privateField
    }
}
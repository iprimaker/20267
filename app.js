import { initCanvas } from "https://iprimaker/github.io/20267/canvas.js";
import { initImages } from "https://iprimaker/github.io/20267/image.js";
import { initFrame } from "https://iprimaker/github.io/20267/frame.js";
import { initAttribute } from "https://iprimaker/github.io/20267/attribute.js";
import { initText } from "https://iprimaker/github.io/20267/text.js";
import { initSerial } from "https://iprimaker/github.io/20267/serial.js";
import { initSave } from "https://iprimaker/github.io/20267/save.js";
import { initReset } from "https://iprimaker/github.io/20267/reset.js";
import { initBuzzPower } from "https://iprimaker/github.io/20267/buzzPower.js";
import { getCurrentCardType, setCurrentCardType } from "https://iprimaker/github.io/20267/config.js";

export function startApp(){

    const cardTypeSelect = document.getElementById("cardType");
    const config = getCurrentCardType();

    cardTypeSelect.value = config.type;

    initCanvas();
    initImages();
    initFrame();
    initAttribute();
    initText();
    initSerial();
    initBuzzPower();
    initSave();
    initReset();

    cardTypeSelect.addEventListener("change", () => {
        setCurrentCardType(cardTypeSelect.value);
        location.reload();
    });

    resizePreview();

    console.log("Original Card Maker 起動");

}

window.addEventListener("resize", resizePreview);

function resizePreview(){

    const preview = document.querySelector(".preview");
    const fabricContainer = document.querySelector(".canvas-container");

    if(!preview || !fabricContainer){
        return;
    }

    const scale = Math.min(
        preview.clientWidth / 697,
        preview.clientHeight / 1016
    ) * 0.9;

    fabricContainer.style.transform = `scale(${scale})`;
    fabricContainer.style.transformOrigin = "center center";

}

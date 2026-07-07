import { getCanvas } from "https://iprimaker/github.io/20267/canvas.js";
import { sortLayers } from "https://iprimaker/github.io/20267/layer.js";

export function initSave(){
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", saveImage);
}

function saveImage(){
    const canvas = getCanvas();

    sortLayers();
    canvas.discardActiveObject();
    canvas.renderAll();

    const image = canvas.toDataURL({
        format: "png",
        quality: 1
    });

    const link = document.createElement("a");
    link.href = image;
    link.download = "aipri-card.png";
    link.click();
}

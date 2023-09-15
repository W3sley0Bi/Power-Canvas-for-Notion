import { windowCanvas } from "./window-canvas"

import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["https://www.notion.so/*"],
  all_frames: true
}

window.addEventListener('load', function () {
    console.log("Notion power canvas")
    this.setTimeout(()=>{ //find a solution for this
        let buttonContainer = document.querySelector('#notion-app > div > div:nth-child(1) > div > nav > div > div > div > div:nth-child(3) > div > div:nth-child(2)')
        if(buttonContainer) {
            let customButton = this.document.createElement('button');
            customButton.textContent = "Power Canvas"
            customButton.style.marginLeft = "20%";
            customButton.addEventListener('click', ()=> {
                // sideCanvas()
                windowCanvas("none")
            })
            buttonContainer.append(customButton);
        }   
        let buttonEditContainer = document.querySelectorAll("#notion-app > div > div:nth-child(1) > div > div:nth-child(2) > main > div > div.whenContentEditable img")
        if(buttonEditContainer){
            buttonEditContainer.forEach(element => {
            let editButton = this.document.createElement('button');
            editButton.textContent = "Edit with Power Canavs"
            editButton.style.color = "Black";
            const imgSrc = "https://www.notion.so" + element.getAttribute('src')
            editButton.addEventListener('click', ()=> {
                windowCanvas(imgSrc)
            })
            
            if(element.parentElement)element.parentElement.append(editButton);
        });
        }


    },5000)

})


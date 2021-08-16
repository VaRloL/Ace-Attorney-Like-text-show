const textTS = document.getElementById("textToShow"),
      buttonSt = document.getElementById("btnEmp"),
      showBox = document.getElementById("showbox");

let soundPW = document.getElementById("pwaudio");

class Writestuff {
    constructor() {
        this.x;
        this.num = 0;
        this.previous = showBox.textContent;
        this.text = textTS.value;
        this.speed = document.getElementById("textSpeed").value;
        this.conditionsMet = 0;
        this.allConditionsMet = false;
    }

    updateVars() {
        this.x;
        this.num = 0;
        this.previous = showBox.textContent;
        this.text = textTS.value;
        this.speed = document.getElementById("textSpeed").value;
        this.conditionsMet = 0;
    }

    checkIn() {
        if (this.text.length <= 160 && this.text.length != " " && this.speed >= 30) {
            return true;
        }
    }

    generalStuff() {
        buttonSt.onclick = () => {
            showBox.textContent = "";
            this.updateVars();
            let allMet = this.checkIn();
            if (allMet == true) {
                let inter = setInterval(() => {
                    if(this.num < this.text.length) {
                        showBox.textContent += this.text.charAt(this.num);
                        if (this.text.charAt(this.num) != "") {
                            soundPW.pause();
                            soundPW.currentTime = 0;
                            soundPW.play();
                        }
                        this.num++;
                    } else {
                        clearInterval(inter);
                    }
                },this.speed)
            } else {
                alert("Text maximum is 160, Minimun speed is 30 and you need to actually write something.");
            }
        }
    }
}
const textAttorney = new Writestuff();

textAttorney.generalStuff();
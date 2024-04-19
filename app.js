let soundText = document.getElementById("soundText")
let click = document.getElementsByClassName("drumkit-button-hover")

// Drumkit Sounds

const drumKick = document.getElementById("drumKick")
const drumSnare = document.getElementById("drumSnare")
const drumBoom = document.getElementById("drumBoom")
const drumClap = document.getElementById("drumClap")
const drumHihat = document.getElementById("drumHihat")
const drumOpenhat = document.getElementById("drumOpenhat")
const drumRide = document.getElementById("drumRide")
const drumTink = document.getElementById("drumTink")
const drumTom = document.getElementById("drumTom")

// heading.addEventListener("click", () => {
//     heading.style.color = "purple";
// })

console.log("Script: Hello World")

//Click

addEventListener("click", () => {

    // Checks the id that the clicked button has

    if (click[0] != undefined) {
        console.log(`Clicked: ${click[0].id}`)

        // Switch statement

        switch (click[0].id) {
            case 'kick':
                drumKick.play()
                soundText.textContent = "Kick"
                break
            case 'snare':
                drumSnare.play()
                soundText.textContent = "Snare"
                break
            case 'boom':
                drumBoom.play()
                soundText.textContent = "Boom"
                break
            case 'clap':
                drumClap.play()
                soundText.textContent = "Clap"
                break
            case 'hihat':
                drumHihat.play()
                soundText.textContent = "Hihat"
                break
            case 'openhat':
                drumOpenhat.play()
                soundText.textContent = "Openhat"
                break
            case 'ride':
                drumRide.play()
                soundText.textContent = "Ride"
                break
            case 'tink':
                drumTink.play()
                soundText.textContent = "Tink"
                break
            case 'tom':
                drumTom.play()
                soundText.textContent = "Tom"
                break
        }

        // Change buttons class to clicked version
        // (must be done last otherwise it clashes with the switch statement above, stops you from playing the same sound until you move your mouse)

        //click[0].className = "drumkit-button-click"
    }
})

//Keyboard

addEventListener("keydown", (event) => { })

onkeydown = (event) => {

    // Check for key code value - this would be better as a switch statement but was done before everything else

    if (event.code == 'Space' || event.code == 'KeyL') {// Space or L Key
        drumKick.play()
        soundText.textContent = "Kick"
    }
    else if (event.code == 'KeyA') { // A Key
        drumSnare.play()
        soundText.textContent = "Snare"
    }
    else if (event.code == 'KeyS') { // S Key
        drumBoom.play()
        soundText.textContent = "Boom"
    }
    else if (event.code == 'KeyD') { // D Key
        drumClap.play()
        soundText.textContent = "Clap"
    }
    else if (event.code == 'KeyF') { // F Key
        drumHihat.play()
        soundText.textContent = "Hihat"
    }
    else if (event.code == 'KeyG') { // G Key
        drumOpenhat.play()
        soundText.textContent = "Openhat"
    }
    else if (event.code == 'KeyH') { // H Key
        drumRide.play()
        soundText.textContent = "Ride"
    }
    else if (event.code == 'KeyJ') { // J Key
        drumTink.play()
        soundText.textContent = "Tink"
    }
    else if (event.code == 'KeyK') { // K Key
        drumTom.play()
        soundText.textContent = "Tom"
    }
    else { // None of the above keys
        soundText.textContent = "None"
    }

    // Show information on the key that was pressed

    console.log(`Key pressed: code ${event.code}, key ${event.key}, which ${event.which}`)
}

// Change style of drumkit buttons on mouseover and mouseout by changing their class between the standard variant and the hover varient

const listItems = document.getElementsByClassName("drumkit-button")
console.log(listItems)

for (let item of listItems) {
    item.addEventListener("mouseover", () => {
        item.className = "drumkit-button-hover"
    })

    item.addEventListener("mouseout", () => {
        item.className = "drumkit-button"
    })
}

// Change background based on window size (media query)

const pBackground = document.getElementsByClassName("background")
const pBackgroundSlim = document.getElementsByClassName("background-slim")

const body = document.getElementsByTagName("body")

// Create a match Function
function changeBackground(x) {
    console.log(body[0])
    if(x.matches){
        body[0].className = "background-slim"
    }
    else{
        body[0].className = "background"
    }
}

// Create a MediaQueryList object
const mmObj = window.matchMedia("(max-width: 1080px)")

// Add the match function as a listener for state changes
mmObj.addEventListener("change", function () {
    changeBackground(mmObj);
});

// Call the match function at run time
changeBackground(mmObj);
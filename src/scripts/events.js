import factoryObj from "./factory.js"
import API from "./data.js"
import renderInterests from "./dom.js"

// All event listeners are here
const registerListeners = () => {
    const mainSection = document.querySelector("#main")

    mainSection.addEventListener("click", event => {
        // Save modal element into a variable
        let modal = document.querySelector("#addEditInterest--modal")
        // USER CLICKS ADD INTEREST
        if (event.target.id.startsWith("addInterest")) {
            modal.innerHTML += factoryObj.createAddInterestHTML()
            modal.showModal()

            // USER CLICKS SAVE NEW INTEREST
        } else if (event.target.id.startsWith("submitInterest")) {
            // Select all inputs in modal and store to variables
            const nameInput = document.querySelector("#interestName__input"),
                descriptionTextarea = document.querySelector("#interestDescription__textarea"),
                locationSelect = document.querySelector("#interestLocation__select")

            const newInterest = {
                placeId: locationSelect.value,
                name: nameInput.value,
                description: descriptionTextarea.value,
                cost: 0.0,
                review: ""
            }
            API.addInterest(newInterest)
                .then(parsedInterest => console.log(parsedInterest))
                .then(API.getInterests)
                .then(renderInterests)

            // Clears and closes modal
            modal.innerHTML = ""
            modal.close()
        }

    })

}

export default registerListeners
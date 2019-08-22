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
            // SHOW MODAL IF SOMEONE CLICKS DELETE ON A CARD
        } else if (event.target.id.startsWith("deleteInterest")) {
            const interestId = event.target.id.split("--")[1]
            modal.innerHTML = factoryObj.createDeletePromptHTML(interestId)
            modal.showModal()
            // DELETE THE ENTRY IF THE USER CLICKS YES
        } else if (event.target.id.startsWith("confirmDelete")) {
            const interestId = event.target.id.split("--")[1]
            API.deleteInterest(interestId)
                .then(API.getInterests)
                .then(renderInterests)
            modal.innerHTML = ""
            modal.close()
            // OTHERWISE CLOSE THE MODAL AND DON'T DELETE IT
        } else if (event.target.id.startsWith("denyDelete")) {
            modal.innerHTML = ""
            modal.close()
            //  EDIT FUNCTIONALITY STARTS HERE
        } else if (event.target.id.startsWith("editInterest")) {
            const interestId = event.target.id.split("--")[1]
            API.getInterestById(interestId)
                .then(parsedInterest => {
                    modal.innerHTML = factoryObj.createEditPrompt(parsedInterest)
                    modal.showModal()
                })
        } else if (event.target.id.startsWith("confirmEdit")) {
            const interestId = event.target.id.split("--")[1],
                placeSelect = document.querySelector("#interestLocation__select"),
                nameInput = document.querySelector("#interestName__input"),
                reviewInput = document.querySelector("#interestReview__input"),
                costInput = document.querySelector("#interestCost__input"),
                descriptionInput = document.querySelector("#interestDescription__textarea")

            const editedInterest = {
                placeId: placeSelect.value,
                name: nameInput.value,
                review: reviewInput.value,
                cost: costInput.value,
                description: descriptionInput.value
            }
            API.editInterest(interestId, editedInterest)
                .then(API.getInterests)
                .then(parsedInterests => {
                    console.log(parsedInterests)
                    modal.innerHTML = ""
                    modal.close()
                    renderInterests(parsedInterests)
                })
        }

    })

}

export default registerListeners
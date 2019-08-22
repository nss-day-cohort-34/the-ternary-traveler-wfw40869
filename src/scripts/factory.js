// All factory functions live in here

const factoryObj = {
    createNotVisitedCard: (interest) => {
        return `
            <div id="interestCard__div">
                <h3>${interest.name}</h3>
                <h4>${interest.place.name}</h4>
                <p>${interest.description}</p>
                <aside class="editDelete__aside">
                    <button id="editInterest__button--${interest.id}">Add Review</button>
                    <button id="deleteInterest__button--${interest.id}">Delete</button>
                </aside>
            </div>
        `
    },
    createVisitedCard: (interest) => {
        return `
            <div id="interestCard__div">
                <h3>${interest.name}</h3>
                <h4>${interest.place.name}</h4>
                <p>Cost: ${interest.cost}</p>
                <p>Description: ${interest.description}</p>
                <p>Review: ${interest.review}</p>
                <aside class="editDelete__aside">
                    <button id="editInterest__button--${interest.id}">Edit</button>
                    <button id="deleteInterest__button--${interest.id}">Delete</button>
                </aside>
            </div>
        `
    },
    createAddInterestHTML: () => {
        return `
            <fieldset class="inputs__fieldset">
                <input type="text" name="interestName" id="interestName__input" placeholder="Enter and interest name">
            </fieldset>
            <fieldset class="inputs__fieldset">
                <textarea name="interestDescription" id="interestDescription__textarea" cols="30" rows="10" placeholder="Interest description"></textarea>
            </fieldset>
            <fieldset class="inputs__fieldset">
                <select name="location" id="interestLocation__select">
                    <option value="1">Italy</option>
                    <option value="2">Switzerland</option>
                    <option value="3">France</option>
                </select>
            </fieldset>
            <fieldset>
                <input type="submit" value="Submit" id="submitInterest__input">
            </fieldset>
            
        `
    },
    createDeletePromptHTML: (interestId) => {
        return `
            <fieldset class="inputs__fieldset" class="inputs__fieldset">
                <h2>Are you sure?</h2>
            </fieldset>
            <fieldset>
                <button id="confirmDelete--${interestId}">Yes</button>
                <button id="denyDelete">No</button>
            </fieldset>
        `
    },
    createEditPrompt: (interest) => {
        return `    
            <fieldset class="inputs__fieldset">
                <label for="interestName">Name:</label>
                <input type="text" name="interestName" id="interestName__input" value="${interest.name}">
            </fieldset>
            <fieldset class="inputs__fieldset">
                <label for="interestReview">Review:</label>
                <input type="text" name="interestReview" id="interestReview__input" value="${interest.review}">
            </fieldset>
            <fieldset class="inputs__fieldset">
                <label for="interestCost">Cost:</label>
                <input type="number" name="interestCost" id="interestCost__input" value="${interest.cost}">
            </fieldset>
            <fieldset class="inputs__fieldset">
                <label for="interestDescription">Description:</label>
                <textarea name="interestDescription" id="interestDescription__textarea" cols="30" rows="10">${interest.description}</textarea>
            </fieldset>
            <fieldset class="inputs__fieldset">
                <select name="location" id="interestLocation__select">
                    <option value="1">Italy</option>
                    <option value="2">Switzerland</option>
                    <option value="3">France</option>
                </select>
            </fieldset>
            <fieldset>
                <input type="submit" value="Submit" id="confirmEdit__input--${interest.id}">
            </fieldset>
        `
    }

}

export default factoryObj
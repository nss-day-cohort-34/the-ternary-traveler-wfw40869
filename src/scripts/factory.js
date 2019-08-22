// All factory functions live in here

const factoryObj = {
    createNotVisitedCard: (interest) => {
        return `
            <div id="interestCard__div">
                <h3>${interest.name}</h3>
                <h3>${interest.place.name}</h3>
                <p>${interest.description}</p>
                <button id="addReview__button--${interest.id}">Add Review</button>
            </div>
        `
    },
    createVisitedCard: (interest) => {
        return `
            <div id="interestCard__div">
                <h3>${interest.name}</h3>
                <h4>${interest.place.name}</h4>
                <p>${interest.description}</p>
                <p>Cost: ${interest.cost}</p>
                <p>Review: ${interest.review}</p>
                <button id="edit__button--${interest.id}">Edit</button>
            </div>
        `
    },
    createAddInterestHTML: () => {
        return `
            <fieldset>
                <label for="interestName">Name:</label>
                <input type="text" name="interestName" id="interestName__input" placeholder="name">
            </fieldset>
            <fieldset>
                <label for="interestDescription">Description:</label>
                <textarea name="interestDescription" id="interestDescription__textarea" cols="30" rows="10"></textarea>
            </fieldset>
            <fieldset>
                <select name="location" id="interestLocation__select">
                    <option value="1">Italy</option>
                    <option value="2">Switzerland</option>
                    <option value="3">France</option>
                </select>
                <input type="submit" value="Submit" id="submitInterest__input">
            </fieldset>
            
        `
    }

}

export default factoryObj
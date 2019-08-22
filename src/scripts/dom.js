import factoryObj from "./factory.js"
import isVisited from "./interests.js"

const renderInterests = (parsedInterests) => {
    // separates the interests into visited and notVisited arrays and returns an object holding them
    const interestsSeparated = isVisited(parsedInterests)
    const notVisitedElement = document.querySelector("#notVisited__div")
    const visitedElement = document.querySelector("#visited__div")


    // Clear elements before we render new ones each time
    visitedElement.innerHTML = ""
    notVisitedElement.innerHTML = ""

    interestsSeparated.notVisited.forEach(interest => {
        notVisitedElement.innerHTML += factoryObj.createNotVisitedCard(interest)
    })
    interestsSeparated.visited.forEach(interest => {
        visitedElement.innerHTML += factoryObj.createVisitedCard(interest)
    })
}

export default renderInterests
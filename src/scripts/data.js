// ALL API CALLS GO IN HERE

const API = {
    getInterests: () => {
        return fetch("http://localhost:8088/interests?_expand=place")
            .then(response => response.json())
    },
    getInterestById: (interestId) => {
        return fetch(`http://localhost:8088/interests/${interestId}?_expand=place`)
            .then(response => response.json())
    },
    addInterest: (newInterest) => {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterest)
        })
            .then(response => response.json())

    },
    deleteInterest: (interestId) => {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    editInterest: (interestId, updatedInterest) => {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedInterest)
        })
            .then(entry => entry.json())
    }

}

export default API
// ALL API CALLS GO IN HERE

const API = {
    getInterests: () => {
        return fetch("http://localhost:8088/interests?_expand=place")
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

    }

}

export default API
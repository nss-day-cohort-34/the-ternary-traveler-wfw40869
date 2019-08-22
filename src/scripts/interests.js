// Takes in all of the interests and moves them into two separate arrays by whether or not they have a review. Then returns an object with the two new arrays

const isVisited = (interests) => {
    const visited = [],
        notVisited = []
        interests.forEach(interest => {
            if(interest.review === "") {
                notVisited.push(interest)
            } else{
                visited.push(interest)
            }
        });
        return {visited, notVisited}
}

export default isVisited
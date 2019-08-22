// Create containers to render each section of page

import API from "./data.js"
import renderInterests from "./dom.js"
import registerListeners from "./events.js"


const init = () => {
    API.getInterests()
        .then(renderInterests)
        .then(registerListeners)
}


export default init
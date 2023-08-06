import { ModalWrapper } from "../component/modal.el.js";
import { AppWrapper } from "./app.el.js";

const componentList = {
    "ModalWrapper": ModalWrapper,
    "AppWrapper": AppWrapper
}

class Application {
    constructor() {
        this.state = {};
    }
    init(o) {
        this.options = o || {};
        // Jumbo configuration json object corresponding to each component specific state and configuration
        // It will can updated with each build time but not in run time ?.
        // Have to think about runtime state and confuguration update either through json file or javascript object.
        const components = Object.keys(componentList);
        components.forEach(component=>{
            componentList[component].init({});
        })
    }
}

export { Application };
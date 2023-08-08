import './_style.css';
import {
    ModalWrapper,
    NavWrapper
} from "../components/index.js";
import { AppWrapper } from "./app.el.js";
import Events from '../lib/index.js';

const componentList = {
    "ModalWrapper": ModalWrapper,
    "AppWrapper": AppWrapper,
    "NavWrapper": NavWrapper
}

class Application {
    constructor() {
        this.state = {};
        this.eventBus = null;
    }
    init(o) {
        this.options = o || {};
        this.eventBus = new Events();
        console.log(this.eventBus);
        this.fetchConfig();
        // Jumbo configuration json object corresponding to each component specific state and configuration
        // It will can updated with each build time but not in run time ?.
        // Have to think about runtime state and confuguration update either through json file or javascript object.
        const components = Object.keys(componentList);
        components.forEach(component=>{
            const componentInstance = new componentList[component]({
                eventBus: this.eventBus
            });
            componentInstance.init({});
        })
    }

    async fetchConfig(){
        const config = await fetch('data/main.json');
        console.log(config);
        const json = await config.json()
        console.log(json);
    }
}

export { Application };
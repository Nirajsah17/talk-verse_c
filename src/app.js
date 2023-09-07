import './_style.css';
import {
    ModalWrapper,
    NavWrapper,
    BodyWrapper,
    LoginWrapper,
    SigninWrapper
} from "../components/index.js";
import {
    AppWrapper
} from "./app.el.js";
import Events from '../lib/index.js';

const componentList = {
    "AppWrapper": AppWrapper,
    "ModalWrapper": ModalWrapper,
    "NavWrapper": NavWrapper,
    "BodyWrapper": BodyWrapper,
    "LoginWrapper": LoginWrapper,
    "SigninWrapper": SigninWrapper
}

class Application {
    constructor() {
        this.state = {};
        this.eventBus = null;
        this.appConfig = {};
    }
   async init(o) {
        this.options = o || {};
        this.eventBus = new Events();
       await this.fetchConfig();
        console.log(this.appConfig);
        // Jumbo configuration json object corresponding to each component specific state and configuration
        // It will can updated with each build time but not in run time ?.
        // Have to think about runtime state and confuguration update either through json file or javascript object.
        await this.initComponents();
    }

    async fetchConfig() {
        const config = await fetch('data/main.json');
        const json = await config.json();
        const componentsConfig = Object.keys(json.components);

        for (const componentConfig of componentsConfig) {
            const componentData = await this.fetchComponentsConfig(json.components[componentConfig]);
            this.appConfig[componentData.className] = componentData;
        }
    }

    async fetchComponentsConfig(componentConfig) {
        const componentResponse = await fetch(`data/${componentConfig}`);
        const componentJson = await componentResponse.json();
        return componentJson;
    }
    
    async initComponents() {
        const components = await Object.keys(componentList);
        components.forEach(component => {
            const componentInstance = new componentList[component]({
                eventBus: this.eventBus
            });
            componentInstance.init(this.appConfig[component]);
        })
    }
}

export {
    Application
};
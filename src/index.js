import {Application} from "./app.js";
import packageJson from "../package.json";

const nameSpaces = {
    __apps: 'app', // comes from js object or json as app config
    __metaInfo: 'metaInfo', // meta json of apps support version and more 
    __bundleInfo: packageJson,
}

function initailizeApp(){
    window['apps'] = new Application({});
    window['metaInfo'] = nameSpaces.__metaInfo
    window['bundleInfo'] = nameSpaces.__bundleInfo
}

(()=>{
    initailizeApp();
})();
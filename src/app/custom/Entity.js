import { getData, checkIfNext, pushEntities } from "../utils";
export default class Entity {
    constructor(element) { 
        this.name = element[0];
        this.data = [];
        this.__url = element[1];
        this.init();
        
    }

    async init() {
        let data = await getData(this.__url);
        pushEntities(data.results, this.data);
        
        while (checkIfNext(data) !== true) {
            const currentData = await getData(data.next);
            await pushEntities(currentData.results, this.data);
            data = await currentData;
        };

    }
};
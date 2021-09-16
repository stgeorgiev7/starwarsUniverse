import { getData, checkIfNext, pushEntities } from "../utils";
export default class Entity {
    constructor(element) { // towa 6e vidim dali trq da e taka
        this.name = element[0];
        this.data = [];
        this.__url = element[1];
        this.init();
        // tuk trqbwa da wkaram wsi4ko ot root elementa i da go nabiq kato danni.
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
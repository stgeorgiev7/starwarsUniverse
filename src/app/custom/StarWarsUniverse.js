import Entity from "./Entity";
import { getData, checkIfNext, pushEntities } from "../utils";

export default class StarWarsUniverse {
    constructor() {
        this.entities = [];

        this.init();
    }

    async init() {
        const roots = await getData('https://swapi.boom.dev/api/');

        Object.entries(roots).forEach(async (element) => {
            const entityName = element[0];
            
            let data = await getData(element[1]);
            const storage = [];

            pushEntities(data.results, storage);

            while (checkIfNext(data) !== true) {
                const currentData = await getData(data.next);
                pushEntities(currentData.results, storage);
                data = await currentData;
            };

            const entity = new Entity(entityName, storage);
            this.entities.push(entity);

            // console.log(this.entities);
            
        });
        //sled kato imam dannite na roots, s object Entryies 6e vikam Entity klasa i 6e pylna vsi4ko v this.entity

        

        // tuk trqbwa da hwana root resorce ot API-to, toest do kolkoto go razbiram, trqbwa da wzema wsi4ki linkove
        // https://swapi.boom.dev/api/
        // za wseki root element trqbwa da wikam Entity classa s imeto i datata
        // trqbwa da assign rezultata ot classa kym property universe v onsowniq class v Application.js
       
        
    }

 

};
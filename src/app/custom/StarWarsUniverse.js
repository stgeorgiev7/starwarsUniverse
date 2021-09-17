import Entity from "./Entity";
import { getData, checkIfNext, pushEntities } from "../utils";

export default class StarWarsUniverse {
    constructor() {
        this.entities = [];
    };

    async init() {
        const roots = await getData('https://swapi.boom.dev/api/');
        await Object.entries(roots).forEach(async (element) => {
            await this.entities.push(new Entity(element));
            
        });

        

        // tuk trqbwa da hwana root resorce ot API-to, toest do kolkoto go razbiram, trqbwa da wzema wsi4ki linkove
        // https://swapi.boom.dev/api/
        // za wseki root element trqbwa da wikam Entity classa s imeto i datata
        // trqbwa da assign rezultata ot classa kym property universe v onsowniq class v Application.js
       
        
    };

 

};
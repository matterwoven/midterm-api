import { response } from "express";
import { events as eventees} from "./default.controller.js";
const events = eventees;

export const eventsAll = () => events;

export const eventById = (identifier) => {
    for(let n in events){
        if(n.id === identifier){
            return n;
        }
    }
    return response.status(400).json([{id: 0, status: 400, error: "Error, no valid id found"}]);
}
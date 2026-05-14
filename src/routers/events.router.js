import { eventById, eventsAll } from "../controllers/events.controller.js";
import { router as routerEvents } from "express";

routerEvents.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.json(eventById(req.params.id));
});

routerEvents.get('/', (req, res) => {
    console.log(eventsAll);
    res.json(eventsAll);
});

export default routerEvents;
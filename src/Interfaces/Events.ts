import Client from '../Client/index';
import { ClientEvents } from "discord.js";

interface Run {
    (client: Client, ...args: any[]);
};

export interface Events {
    name: keyof ClientEvents;
    run: Run;
    
};
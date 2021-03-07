import { Events }  from "../Interfaces";

export const event: Events = {
    name: "ready",
    run: (client) => {
        console.log(`${client.user.tag} is online!`);
    }
}
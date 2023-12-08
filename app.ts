// app.ts
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify.config";
import { User } from "./entities/User";

const server = new InversifyExpressServer(container);

server.build().listen(3000, () => {
    console.log("Server started on http://localhost:3000"); 
    
    // Nouveau user
    const myUser: User = new User(1, 'Mitch', 'michel.puissant@fulll.fr');
}); 
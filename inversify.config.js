"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// inversify.config.ts
var inversify_1 = require("inversify");
var UserController_1 = require("./controllers/UserController");
var UserUseCase_1 = require("./useCases/UserUseCase");
var container = new inversify_1.Container();
container.bind(UserController_1.UserController).toSelf();
container.bind(UserUseCase_1.UserUseCase).toSelf();
exports.default = container;

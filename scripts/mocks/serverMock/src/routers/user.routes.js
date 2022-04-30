import express from "express";
import UserController from "../controllers/user.controllers.js";

export default class UserRouter extends express.Router {
    constructor() {
        super();
        this.userController = new UserController();

        this.post('/popular', this.userController.createUser);
        this.get('/', this.userController.getUsers);
        this.post('/', this.userController.addUser);
        this.put('/:id', this.userController.updateUser);
        this.delete('/:id', this.userController.deleteUser);
    }
}



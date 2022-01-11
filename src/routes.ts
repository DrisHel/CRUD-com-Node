import{Router} from "express";
import { CreateCategoryController } from "./Controller/CreateCategoryController";

// criação da rota de categoria
const routes = Router();
routes.post("/categories",new CreateCategoryController().handle);

export {routes};
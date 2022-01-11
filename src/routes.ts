import{Router} from "express";
import { CreateCategoryController } from "./Controller/CreateCategoryController";
import { GetAllCategoriesController } from "./Controller/GetAllCategoriesController";

// category route file creation
const routes = Router();
routes.post("/categories",new CreateCategoryController().handle);
routes.get("/categories",new GetAllCategoriesController().handle);

export {routes};
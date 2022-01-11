import{Router} from "express";
import { CreateCategoryController } from "./Controller/CreateCategoryController";
import { DeleteCategoryController } from "./Controller/DeleteCategoryController";
import { GetAllCategoriesController } from "./Controller/GetAllCategoriesController";

// category route file creation
const routes = Router();
routes.post("/categories",new CreateCategoryController().handle);
routes.get("/categories",new GetAllCategoriesController().handle);
routes.delete("/categories/:id",new DeleteCategoryController().handle);
export {routes};
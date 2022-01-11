import{Router} from "express";
import { CreateCategoryController } from "./Controller/CreateCategoryController";
import { DeleteCategoryController } from "./Controller/DeleteCategoryController";
import { GetAllCategoriesController } from "./Controller/GetAllCategoriesController";
import { UpdateCategoryController } from "./Controller/UpdateCategoryController";

// category route file creation
const routes = Router();
routes.post("/categories",new CreateCategoryController().handle);
routes.get("/categories",new GetAllCategoriesController().handle);
routes.delete("/categories/:id",new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().headle);
export {routes};
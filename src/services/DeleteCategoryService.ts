import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


export class DeleteCategoryService{
    async execute(id : string){
        const repo = getRepository(Category);

        if(!(await repo.findOne(id))){  //se o id não existir
            return new Error("Category does not exists!");  //mostra o erro ao usuário
        }
        await repo.delete(id); // se não, mostra o id
    }
}
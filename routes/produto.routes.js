import express from "express"
import { produtoController } from './../controller/produto.controller.js';
import {app} from "../index.js"

export const routeProduto = ()=>{
    const router = express.Router();

    router.post('/', produtoController.create)
    router.get('/', produtoController.findAll)
    router.get('/:id', produtoController.findById)
    router.get('/:status', produtoController.findByStatus)
    router.put('/:id', produtoController.update)
    router.delete('/:id', produtoController.deleteById)
    router.delete('/', produtoController.deleteALL)

    app.use('/api/produto',router)
}
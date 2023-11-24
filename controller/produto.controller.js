import db from '../model/index.js';

const Produto = db.produto;

export const produtoController = {
    create: (request,response)=>{
        if(!request.body.nome){
            res.status(400).send({
                message:"Name must no void"
            })
        }

        const produto = request.body;


        Produto.create(produto)
        .then(data=>{
            response.send(data);
        })
        .catch(e=>{
            response.status(500).send({message : e.message || "Ocorreu um erro ao salvar o Produto"});
        })
    },
    findAll: (request,response)=>{
    Produto.findAll()
      .then(data=>{response.send(data);
      })
      .catch(e=>{
          response.status(500).send({message : e.message || "Ocorreu um erro ao buscar os Produtos"});
      })
    },
    findById: (request,response)=>{
        const id = request.params.id;
        Produto.findByPk(id)
        .then(data=>{response.send(data);
        })
        .catch(e=>{
            response.status(500).send({message : e.message || `Ocorreu um erro ao buscar o Produto de id: ${id}`});
        }) 
    },
    findByStatus: (request,response)=>{},
    update: (request,response)=>{},
    deleteById: (request,response)=>{},
    deleteALL: (request,response)=>{},
}
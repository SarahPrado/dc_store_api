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
    findByStatus: (request,response)=>{
        //convertemos o parâmetro status para minusculo (toLowerCase()), pois o usuário pode escrever tudo doido (TRUE, True e depois com o ternário convertemos para o booleano)

        const status = request.params.status.toLowerCase() === 'true' ? true : false;

        console.log('status', typeof status); //Foi para verificar o tipo do status, pois tem que tratar
       
        Produto.findAll({
            where: {ativo: status}
        })
        .then(data=>{response.send(data);
        })
        .catch(e=>{
            response.status(500).send({message : e.message || `Ocorreu um erro ao buscar o Produto pelo Status: ${status}`});
        }) 

    },
    update: async (request,response)=>{
        const id = request.params.id;
        const produtoBd = await Produto.findByPk(id);

        if (!produtoBd) {
            response.status(404).json(`O produto com o id ${id} não existe`);
        }
        await produtoBd.update(request.body)
        response.status(204).send()

    },
    deleteById: async(request,response)=>{
        const id = request.params.id;
        const produtoBd = await Produto.findByPk(id)
        if (!produtoBd) {
            response.status(404).json('O produto não existe, por favor digite um ID verdadeiro');
        }
        await produtoBd.destroy();
        response.status(204).send()
        
    },
    deleteALL: async (request,response)=>{
        try {
            await Produto.destroy({ where: {} })

            response.status(204).send()
        } catch (error) {
            response.status(500).json('Erro ao excluir todos os produtos')
        }
    }
}

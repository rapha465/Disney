import disneyService from "../models/disney.js"

const disney = [
    new disney (
        1,
        "frozen",
        "Uma história de amor e amizade",
        "frozen.jpg",
        "Animação"
),

  new disney(
    2,
    "moana",
    "Uma aventura no mar",
    "moana.jpg",
    "Animação"
)
];

class disneyService {
  Criar (nome, descricao, imagem, categoria) {
 const novodisney = new disney(
            disney.length + 1,
            nome,
            descricao,
            imagem,
            categoria
        );
        disney.push(novodisney);

        return novodisney;
        }
}   

Listar() {

return disney;
    }


    buscarPorId(id) {

        const item = disney.find(
            disney => disney.id === id
        );

        return item;
    }


    atualizar(id, nome, descricao, categoria) {

        const item = disney.find(
            disney => disney.id === id
        );

        if (!item) {
            return null;
        }

        item.nome = nome;
        item.descricao = descricao;
        item.categoria = categoria;

        return item;
    }


    deletar(id) {

        const index = disney.findIndex(
            disney => disney.id === id
        );

        if (index === -1) {
            return false;
        }

        disney.splice(index, 1);

        return true;
    }
}


export default DisneyServic
    
}




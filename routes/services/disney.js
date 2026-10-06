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


    
}




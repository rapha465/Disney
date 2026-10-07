import DisneyService from "../services/Disney.js";

const disneyService = new DisneyService();


// CREATE
export const criarDisney = (req, res) => {

    try {

        const {
            nome,
            descricao,
            categoria,
            ano
        } = req.body;

        const novoDisney = disneyService.criar(
            nome,
            descricao,
            categoria,
            ano
        );

        res.status(201).send(novoDisney);

    } catch (erro) {

        res.status(400).send({
            mensagem: erro.message
        });
    }
};


// READ - listar todos
export const listarDisney = (req, res) => {

    try {

        const lista = disneyService.listar();

        res.send(lista);

    } catch (erro) {

        res.status(400).send({
            mensagem: erro.message
        });
    }
};


// READ - buscar por ID
export const buscarDisneyPorId = (req, res) => {

    try {

        const id = Number(req.params.id);

        const item = disneyService.buscarPorId(id);

        res.send(item);

    } catch (erro) {

        res.status(404).send({
            mensagem: erro.message
        });
    }
};


// UPDATE
export const atualizarDisney = (req, res) => {

    try {

        const id = Number(req.params.id);

        const {
            nome,
            descricao,
            categoria,
            ano
        } = req.body;

        const item = disneyService.atualizar(
            id,
            nome,
            descricao,
            categoria,
            ano
        );

        res.send(item);

    } catch (erro) {

        res.status(404).send({
            mensagem: erro.message
        });
    }
};


// DELETE
export const deletarDisney = (req, res) => {

    try {

        const id = Number(req.params.id);

        const resultado = disneyService.deletar(id);

        res.send(resultado);

    } catch (erro) {

        res.status(404).send({
            mensagem: erro.message
        });
    }
};
const {Endereco} = require('../models');

//Criacao de um novo endereco
exports.createEndereco = async(res, req)=>{
    try{
        const{CEP, LOGRADOURO, NUMERO, COMPLEMENTO, BAIRRO, CIDADE, ESTADO, MUNICIPIO_IBGE} = req.body;
        const novoEndereco = await Endereco.create({
            CEP,
            LOGRADOURO,
            NUMERO,
            COMPLEMENTO,
            BAIRRO,
            CIDADE,
            ESTADO,
            MUNICIPIO_IBGE
        });
        res.status(201).json(novoEndereco);
    }catch(error){
        res.status(500).json({error:'Erro ao criar endereço', details: error.message});
    }
};

//Leitura de todos os enderecos
exports.getAllEndereco = async(req, res) =>{
    try{
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
    } catch(error){
        res.status(500).json({error:'Erro ao buscar endereços', details: error.message});
    }
};

//Leitura de um endereco por ID
exports.getEnderecoById = async (req, res) => {
    try{
        const {ID} = req.params;
        const endereco = await Endereco.findByPk(ID);

        if(!endereco){
            return res.status(404).json({error: 'Endereço não encontrado'});
        }

        res.status(200).json(endereco);
    }catch(error){
        res.status(500).json({error: 'Erro ao buscar endereço', details: error.message})
    }
};

//atualizacao de um endereco
exports.updateEndereco = async (req, res) =>{
    try{
        const{ID} = req.params;
        const{CEP, LOGRADOURO, NUMERO, COMPLEMENTO, BAIRRO, CIDADE, ESTADO, MUNICIPIO_IBGE} = req.body;
        
        const endereco = await Endereco.findByPk(ID);

        if(!endereco){
            return res.status(404).json({error: 'Endereço não encontrado'});
        }

        endereco.CEP = CEP;
        endereco.LOGRADOURO = LOGRADOURO;
        endereco.NUMERO = NUMERO;
        endereco.COMPLEMENTO = COMPLEMENTO;
        endereco.BAIRRO = BAIRRO;
        endereco.CIDADE = CIDADE;
        endereco.ESTADO = ESTADO;
        endereco.MUNICIPIO_IBGE = MUNICIPIO_IBGE;

        await endereco.save();
        
        res.status(200).json(endereco);
    }catch(error){
        res.status(500).json({error: 'Erro ao atualizar endereço', details: error.message});
    }
};

//Exclusao de um endereco
exports.deleteEndereco = async(req, res) =>{
    try{
        const{ID} = req.params;
        const endereco = await Endereco.findByPk(ID);

        if(!endereco){
            return res.status(404).json({error: 'Endereço não encontrado'});
        }

        await endereco.destroy();

        res.status(204).send();//sem conteudo pois foi deletedo
    }catch(error){
        res.status(500).json({error: 'Erro ao deletar endereço', details: error.message});
    }
};

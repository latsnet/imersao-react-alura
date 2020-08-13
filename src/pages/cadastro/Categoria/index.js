import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#FFF'
    }

    const [listaCategorias, setListaCategorias] = useState([]);

    const [categoria, setCategoria] = useState(valoresIniciais);

    function cadastrarCategoria(e) {
        e.preventDefault();
        setListaCategorias([...listaCategorias, categoria]);
        setCategoria(valoresIniciais);
    }

    function setValue(chave, valor) {
        setCategoria({
            ...categoria,
            [chave]: valor
        });
    }

    function handleChange(infosDoEvento) {
        const { target } = infosDoEvento;
        setValue(target.getAttribute('name'), target.value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria:</h1>

            <form onSubmit={cadastrarCategoria}>

                <FormField
                    label="Nome da Categoria:"
                    name="nome"
                    type="text"
                    value={categoria.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    name="descricao"
                    type="text"
                    value={categoria.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor:"
                    name="cor"
                    type="color"
                    value={categoria.cor}
                    onChange={handleChange}
                />

                <button type="submit">Cadastrar</button>

            </form>

            <ul>
                {listaCategorias.map((categoria, index) => 
                    { 
                        return (
                            <li key={`${categoria.nome}${index}`}>{categoria.nome}</li>
                        )
                    })}
            </ul>

            <Link to="/">
               Ir para home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria;
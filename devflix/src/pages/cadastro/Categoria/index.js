import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import {EstiloForm} from './styles';


function CadastroCategoria() {
    //State
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#bbbbbb',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }
    function handleChange(infosDoEvento) {
        //const { getAttribute, value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <EstiloForm>
            <PageDefault>
                <h1>
                    Cadastro de Categoria : {values.nome}
                </h1>
                <form onSubmit={function handleSubmit(infosDoEvento) {
    
                    infosDoEvento.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);
                    setValues(valoresIniciais);
                }}>
                    <FormField
                        placeholder="Podcast"
                        label="Nome da Categoria"
                        value={values.nome}
                        onChange={handleChange}
                        type="text"
                        name="nome"
                    />
    
                    <FormField
                        placeholder="Flow Podcast"
                        label="Descrição"
                        value={values.descricao}
                        onChange={handleChange}
                        type="textarea"
                        name="descricao"
                    />
    
                    <FormField
                        label="Cor"
                        value={values.cor}
                        onChange={handleChange}
                        type="color"
                        name="cor"
                    />
    
                    <button className="FormButton">
                        Cadastrar
                    </button>
                </form>
                <ul>
                    {categorias.map((categoria, indice) => {
                        return (
                            <li key={`${categoria}, ${indice}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>
    
                <Link to="/" className="voltar">
                    Ir para home
                </Link>
            </PageDefault>
        </EstiloForm>
    )
}

export default CadastroCategoria;
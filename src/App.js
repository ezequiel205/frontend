import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado
 */

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
         setProjects(response.data);
            console.log(response);
        })
    }, []);

/**
 *  // UseStage retorna um array com 2 posições
    // 1. A variavel com seu valor inicial
    // 2. Função para atualizarmos esse valor
*/

async function handleAddProject() {

    // ... Copia o projects
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    // Método POST
    const response = await api.post('projects', {
        title: `Novo projeto ${Date.now()}`,
        owner: "Ezequiel Almeida"
    });

    const project = response.data;

    setProjects([...projects, project]);

    // console.log(projects);
}

    return (
        <>
            <Header title="Projects" /> 
            
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li> )}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projetos</button>
        </>
    );
};

export default App;
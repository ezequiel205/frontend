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

function handleAddProject() {

    // ... Copia o projects
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    console.log(projects);
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
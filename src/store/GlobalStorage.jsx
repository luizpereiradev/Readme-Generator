/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = React.createContext();

export function GlobalStorage({ children }) {
  const [projects, setProjects] = React.useState({
    Readme: `# README GENERATOR
README Generator é um gerador de readme que usa inteligência artificial para gerar o readme de projetos open source. Ele foi criado usando React e OpenAI para ajudar os desenvolvedores a criar rapidamente um readme de qualidade para seus projetos.

## Recursos

- Geração automática de readme usando inteligência artificial
- Interface intuitiva e fácil de usar
- Suporte a vários formatos de readme
- Suporte a vários idiomas
- Suporte a vários temas

## Como usar

1. Acesse o site do README Generator
2. Selecione o formato de readme desejado
3. Selecione o idioma desejado
4. Selecione o tema desejado
5. Insira as informações necessárias
6. Clique em "Gerar Readme"
7. Copie o readme gerado para o seu projeto

## Contribuindo

Se você deseja contribuir para o README Generator, siga as etapas abaixo:

1. Faça um fork do repositório
2. Crie uma branch para suas alterações
3. Faça as alterações necessárias
4. Envie um pull request

## Licença

README Generator é um software de código aberto licenciado sob a licença MIT.`,
    'Pixel Art Maker': '# Pixel Art Maker',
  });

  const [atualProject, setAtualProject] = React.useState('Readme');

  return (
    <GlobalContext.Provider
      value={{
        projects: [projects, setProjects],
        atualProject: [atualProject, setAtualProject],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalStorage.propTypes = { children: PropTypes.node.isRequired };

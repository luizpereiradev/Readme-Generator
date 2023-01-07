import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const generateReadme = async (event, newProject) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `me responda na lingua: ${newProject.lang || 'inglesa'}, Crie um readme para um projeto o nome é ${newProject.name} e em resumo ele é: ${newProject.desc}, foi desenvolvido usando as seguintes tecnologias: [${newProject.tec}], com as seções: [Recursos, Instalação, Uso, Contribuição, Licença]`,
    temperature: 0,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data.choices[0].text;
};

export default generateReadme;

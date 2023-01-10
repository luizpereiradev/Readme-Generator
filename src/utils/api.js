import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.API_KEY, // Your API KEY
});

const openai = new OpenAIApi(configuration);

const generateReadme = async (newProject) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `answer me in language: ${newProject.lang}, Create a readme for a project the name is ${newProject.name} and in short it is: ${newProject.desc}, was developed using the following technologies: [${newProject.tec}], the readme should contain the sections: [Features, Installation, Usage, Contribution, License].
    `,
    temperature: 0,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data.choices[0].text;
};

export default generateReadme;

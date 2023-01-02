import { Configuration, OpenAIApi } from 'openai';


const configuration = new Configuration({
  apiKey:'Your API Key' ,
});

const openai = new OpenAIApi(configuration);

const generateReadme = async (event, setCode, newProject) => {
  event.preventDefault()
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Crie um readme para um projeto o nome é ${newProject.name} e em resumo ele é: ${newProject.desc}`,
    temperature: 0,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  setCode(response.data.choices[0].text);
}


export default generateReadme
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey:'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' ,
});

const openai = new OpenAIApi(configuration);

const generateReadme = async (event, name, description, setCode) => {
  event.preventDefault()
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Crie um readme para um projeto o nome é ${name} e em resumo ele é: ${description}`,
    temperature: 0,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  setCode(response.data.choices[0].text);
}


export default generateReadme
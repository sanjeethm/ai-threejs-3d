import openai from 'openai';
const { createImage } = openai;

openai.apiKey = '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';

const prompt = 'a simple logo\n';
const options = {
  n: 1,
  size: '1024x1024',
  responseFormat: 'url',
};

openai.createImage(prompt, options)
  .then(result => {
    console.log(result);
    // Do something with the generated image URL
  })
  .catch(error => {
    console.log(error);
  });
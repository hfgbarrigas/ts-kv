import { OpenAI } from 'langchain/llms/openai'

export default async function Resolver(_, { prompt }, { kv }) {
  try {
    const value = await kv.get(prompt)

    if (value === null) {
      const response = "test"
      await kv.put(prompt, response, { expirationTtl: 60 })
      return response
    } else {
      return value
    }
  } catch (e) {
    console.error(e)
    return "error"
  }
}

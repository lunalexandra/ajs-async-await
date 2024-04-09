import read from './reader'
import json from './parser'

export default class GameSavingLoader {
async load() {
  try {
    let data = await read();
    let value = await json(data)
    return JSON.parse(value)
    }
  catch (error){
    throw new Error(error.message)
  }
 }
}

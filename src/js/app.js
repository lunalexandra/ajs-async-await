import GameSavingLoader from './GameSavingLoader'

export default function newLoader() {
  const loader = new GameSavingLoader();
  (async () => {
    try {
      const value = await loader.load();
      console.log(value);
    } catch (error) {
      console.log(error.message);
    }
  })();
  return loader
}
 
newLoader();
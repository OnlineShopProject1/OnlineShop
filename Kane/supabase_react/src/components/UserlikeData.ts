import { createMessenger, v1 } from '@userlike/messenger';

async function createApi(): Promise<v1.Api> {
    const result = await createMessenger({
      version: 1,
      widgetKey: "YOUR_WIDGET_SECRET",
    });
  
    if (result.kind === "error") throw new Error(result.error);
  
    const { api } = result.value;
  
    if (api === null) {
      throw new Error(
        "api reached end-of-life, please check documentation and upgrade."
      );
    }
  
    return api;
  }

  export default createApi
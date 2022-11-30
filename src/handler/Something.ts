import { default as axios } from "axios";

const HANDLER = async (): Promise<{ statusCode: number; body: string }> => {
  const result = await axios.get<{ name: string }>(
    "https://rickandmortyapi.com/api/character/2"
  );

  const somethingElse = "somethingElse";

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: result.data.name,
        something: somethingElse,
      },
      null,
      2
    ),
  };
};

export { HANDLER };

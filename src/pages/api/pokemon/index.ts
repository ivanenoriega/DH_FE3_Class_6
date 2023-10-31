// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getListOfPokemons, getPokemonByName } from "@/helpers/api/pokemon";
import type { NextApiRequest, NextApiResponse } from "next";
import { isString } from "util";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { limit, offset } = req.query;
  const listLimit = isString(limit) ? parseInt(limit) : 100;
  const listOffset = isString(offset) ? parseInt(offset) : 0;
  const pokemon = await getListOfPokemons(listLimit, listOffset);

  res.status(200).json(pokemon);
}

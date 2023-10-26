// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPokemonByName } from "@/helpers/api/pokemon";
import type { NextApiRequest, NextApiResponse } from "next";
import { isString } from "util";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;
  const pokemonName = isString(name) ? name : "";
  const pokemon = await getPokemonByName(pokemonName);

  res.status(200).json(pokemon);
}

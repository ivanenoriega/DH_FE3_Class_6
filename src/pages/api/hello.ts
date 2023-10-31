// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: "John Doe",
    // @ts-ignore
    env_url_base: process.env.URL_BASE,
    // @ts-ignore
    next_url: process.env.NEXT_PUBLIC_VERCEL_URL,
    vercel_url: process.env.VERCEL_URL,
  });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetchPageData from "../../lib/fetchPageData"

export default async function handler(req, res) {
  const pageData = await fetchPageData()

  res.status(200).json(pageData)
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import csrf from "./csrf";

export default async (req, res) => {
  try {
		await csrf(req, res)
	} catch (e) {
		res.status(401).json({ name: 'Fuck off' })
	}
	res.status(200).json({ name: 'John Doe' })
}

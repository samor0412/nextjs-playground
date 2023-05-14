import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        const path = req.query?.path;

        if (path && typeof path === 'string') {
            await res.revalidate(path);
            console.log(`Reinvalidated path: ${path}`)
            return res.json({ revalidated: true, path });
        } else {
            throw new Error('invalid path');
        }
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        console.error(err)
        return res.status(500).send('Error revalidating');
    }
}
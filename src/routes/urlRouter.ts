import { Router, Request, Response, NextFunction } from "express";
import { nanoid } from "nanoid";
import Url, { IUrl } from "../models/url";

const router = Router();

// router.get("/", async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const urls: IUrl[] = await Url.find().exec();
//     return res.json(urls);
//   } catch (error) {
//     return next(error);
//   };
// });

// router.post("/", async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { name, url: given_url } = req.body;
//     if (!given_url) {
//       return res.status(400).json({ message: "URL is missing" });
//     };
//     if (name) {
//       const existingUrl: IUrl | null = await Url.findOne({ shortUrl: name });
//       if (existingUrl) {
//         return res.status(400).json({ message: "Name already exists" });
//       } else {
//         const url = new Url({ originalUrl: given_url, shortUrl: name });
//         await url.save();
//         return res.json(url);
//       };
//     } else {
//       const shortUrl = nanoid(7);
//       const url = new Url({ originalUrl: given_url, shortUrl: shortUrl });
//       await url.save();
//       return res.json(url);
//     };
//   } catch (error) {
//     return next(error);
//   };
// });

// router.delete('/:name', async (req: Request, res: Response, next: NextFunction) => {
//   const { name } = req.params;
//   try {
//     const url: IUrl | null = await Url.findOneAndDelete({ shortUrl: name });
//     if (url) {
//       return res.json({ message: 'URL deleted successfully' });
//     } else {
//       return res.status(404).json({ message: 'URL not found' });
//     }
//   } catch (error) {
//     return next(error);
//   }
// });

export default router;
import { Router, Request, Response, NextFunction } from "express";
import Url, { IUrl } from "../models/url";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is Up and Running" });
});

router.get("/:shortUrl", async (req: Request, res: Response, next: NextFunction) => {
  const { shortUrl } = req.params;
  try {
    const url: IUrl | null = await Url.findOne({
      shortUrl,
    });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ message: "URL not found" });
    };
  } catch (error) {
    console.error("Error in redirecting URL:", error);
    return next(error);
  };
});

export default router;
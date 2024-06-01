import multer from "multer";
import type { Request, Response, NextFunction } from "express";

const upload = multer({ storage: multer.memoryStorage() });

const formData = (req: Request, res: Response, next: NextFunction): void => {
  const multerMiddleware = upload.any();

  multerMiddleware(req, res, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    next();
  });
};

export default formData;

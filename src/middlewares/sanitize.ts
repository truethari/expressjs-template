import xss from "xss";
import type { Request, Response, NextFunction } from "express";

type RequestBody = Record<string, string>;

const sanitize = (req: Request, res: Response, next: NextFunction): void => {
  for (const [key, value] of Object.entries(req.body as RequestBody)) {
    req.body[key] = xss(value);
  }
  next();
};

export default sanitize;

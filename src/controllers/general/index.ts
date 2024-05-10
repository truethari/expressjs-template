import type { Request, Response } from "express";

const hello = async (req: Request, res: Response): Promise<Response> => {
  return res.send({ message: "Hello, World!" });
};

export { hello };

import { NextFunction, Request, Response } from "express";

export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
    const date = new Date().toLocaleTimeString()
    // const date = new Date().toISOString()
  console.log(`metodo: ${req.method} ${req.url} at [${date}]`);
  next();
}

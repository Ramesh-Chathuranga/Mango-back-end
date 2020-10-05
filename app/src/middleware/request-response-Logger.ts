import express,{Request,Response,NextFunction} from "express";

export const requestResponseLogger:any = (req:Request,res:Response, next:NextFunction)=>{
  console.info("\x1b[33m",`${req.method} ${req.originalUrl}`);
  const start: any = new Date().getTime();
  res.on('finish',()=>{
      const diff:any=  new Date().getTime() - start;
      console.info("\x1b[33m",`${req.method} ${req.originalUrl} status code ${res.statusCode} in ${diff} seconds`)
  });
  next();
}

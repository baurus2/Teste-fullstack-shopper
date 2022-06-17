import connection from "../connection";
import { Request, Response } from "express";

export default async function detalhesPedido( req: Request, res: Response ): Promise<void> {
    try {
        const id = req.params.id
        const result = await connection.raw(`
        SELECT * from shopper WHERE id LIKE "%${id}%";
        `
        );console.log (result)
        res.status(200).send({ shopper: result[0]})
    }catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage);
        
      }
}
//oi
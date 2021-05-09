import { NextApiRequest, NextApiResponse } from 'next'
interface DataProps {

}
import "reflect-metadata"
import { Todos } from '../../../src/entity/todo';
import { Database } from '../../../src/utils/db';
export default async (req: NextApiRequest, res: NextApiResponse<DataProps>) => {
  if (req.method === 'POST') {
    const db = new Database()
    const conn = await db.getConnection("default")
    try {
      const todoRepo = conn.getRepository(Todos)
      const { title, detail } = req.body

      const user = await todoRepo.insert({
        title,
        detail
      })
      res.send({
        code: 200,
        data: user
      })
    } catch (error) {
      res.send({
        code: 500,
        message: error
      })
    }
  } else {
    res.send({
      code: 500,
      message: "Internal Server Error."
    })
  }
}
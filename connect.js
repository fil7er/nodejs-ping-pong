import { json } from 'express/lib/response'
import {Pool} from 'pg'


export class Connection{

    pool = new Pool({
        user: 'me',
        host: 'localhost',
        database: 'postgres',
        password: 'password',
        port: 5432,
      })


      insert(value){
        this.pool.query('INSERT INTO users (count) VALUES ($1) RETURNING *', [value], (error, results) => {
            if (error) {
              throw error
            }
          })
      }


      select(){
        this.pool.query('SELECT * FROM users', (error, results) => {
            if (error) {
              throw error
            }
            return results.rows
          })
      }

      toJSON() {return json(this.select)}

}


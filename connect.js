import pkg from 'pg';
const {Pool} = pkg;


export class Connection{
  
     pool = new Pool({
        user: 'postgres',
        host: process.env.POSTGRES_HOST,
        database: 'postgres',
        password: process.env.POSTGRES_PASSWORD,
        port: 5432,
      })

      init(){
        this.pool.query('CREATE TABLE IF NOT EXISTS "counter" ("count" INTEGER NULL, "id" serial , PRIMARY KEY ("id"))')
      }


      insert(value){
        this.pool.query('INSERT INTO counter (count) VALUES ($1) RETURNING *', [value], (error, results) => {
            if (error) {
              throw error
            }
          })
      }


      


       select(){

        return new Promise(function(resolve, reject){

          const pool = new Pool({
            user: 'postgres',
            host: process.env.POSTGRES_HOST,
            database: 'postgres',
            password: process.env.POSTGRES_PASSWORD,
            port: 5432,
          })

          pool.query(`SELECT * FROM counter ORDER BY id DESC LIMIT 50`, function(err, result) {
              if(err)
                  return reject(err);
              resolve(result.rows);
          })
      });

      

      }


}


const mysql=require("mysql")
const util=require("util")

let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    // password:"pnpexecutives",
    password:"Ifeanyi@09054114402",
    database:"nnenna"
})
connection.connect((err)=>{
if (err) throw err
else {
    console.log("connected")
}
}
)

connection.query=util.promisify(connection.query)

module.exports=connection
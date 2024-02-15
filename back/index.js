const app = require ("./src/server.js")

const puerto = 3000;

app.listen(puerto, () =>{
    console.log(`server listening on http://localhost:${puerto}`);
})
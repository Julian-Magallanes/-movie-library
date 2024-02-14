    const app = require ("./src/server")

const puerto = 3000

app.listen (puerto, () =>{
    console.log(`server listenin on http://localhost:${puerto}`);
})
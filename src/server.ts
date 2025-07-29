import * as http from 'http';

const PORT = process.env.PORT || 3333



const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

})


server.listen(PORT, () => console.log(`Server iniciado na porta ${PORT}`))
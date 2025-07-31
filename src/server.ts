import * as http from 'http';
import { App } from './app';


const server = http.createServer(App)

const PORT = process.env.PORT || 3333

server.listen(PORT, () => console.log(`Server iniciado na porta ${PORT}`))
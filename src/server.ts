import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

const PORT = process.env.PORT || 3333



const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {

  //QueryString
  const [baseUrl, queryString] = request.url?.split("?") ?? [""]

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }


  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response)
  }


})


server.listen(PORT, () => console.log(`Server iniciado na porta ${PORT}`))
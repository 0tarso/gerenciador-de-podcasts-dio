import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { HttpStatusCode } from "../utils/http-status-code";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

  const content = await serviceListEpisodes()

  res.writeHead(HttpStatusCode.OK, { 'content-type': "application/json" });

  res.end(JSON.stringify(content))
}


export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

  const content = await serviceFilterEpisodes(req.url)

  res.writeHead(HttpStatusCode.OK, { 'content-type': "application/json" });

  res.end(JSON.stringify(content))
}
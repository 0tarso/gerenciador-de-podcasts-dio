import { HttpStatusCode } from "../utils/http-status-code"
import { PodcastTransferModel } from "../models/podcast-DTO"
import { repositoryPodcast } from "../repositories/podcast-repository"


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

  //Define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }

  //Buscamos os dados
  const queryString = podcastName?.split("?p=")[1] || ""

  const data = await repositoryPodcast(queryString)


  //Verifica o conteúdo
  if (data.length !== 0)
    responseFormat.statusCode = HttpStatusCode.OK
  else
    responseFormat.statusCode = HttpStatusCode.NO_CONTENT

  responseFormat.body = data

  return responseFormat

}
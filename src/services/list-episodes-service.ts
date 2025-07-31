import { HttpStatusCode } from "../utils/http-status-code"
import { PodcastTransferModel } from "../models/podcast-DTO"
import { repositoryPodcast } from "../repositories/podcast-repository"

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }

  const data = await repositoryPodcast()

  if (data.length !== 0)
    responseFormat.statusCode = HttpStatusCode.OK
  else
    responseFormat.statusCode = HttpStatusCode.NO_CONTENT

  responseFormat.body = data

  return responseFormat

}
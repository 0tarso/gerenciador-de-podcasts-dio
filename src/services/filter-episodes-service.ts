import { repositoryPodcast } from "../repositories/podcast-repository"

export const serviceFilterEpisodes = async () => {

  const data = await repositoryPodcast("")

  return data

}
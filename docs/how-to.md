# Podcast Manager


### Descrição
Um app ao estilo netflix, aonde possamos centralizar diferentes episódios separados por categoria

---

### Domínio
Podcasts feitos em vídeo

---

### Features
 - Listar os episódios/podcasts em sessões de categoria
  - [saúde, fitness, mentalidade, humor]
 - Filtrar episódios por nome do podcast

---

### Como vamos implementar

Retornar em uma api rest (json):
nome podcast, nome do episódio, imagem de capa, link, category

```js

[
  {
    podcastName: "flow",
    episode: "Daniel Lopez - Flow #473",
    videoId: "nq5G21m11E0",
    cover: "https://i.ytimg.com/vi/nq5G21m11E0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC9KmW4Jh918ZFygXcSMokv3DGrGw",
    link: "https://www.youtube.com/watch?v=nq5G21m11E0",
    categories: ["espiritualidade", "teologia", "conspirações" ]
  },
  {
    podcastName: "flow",
    episode: "3 continentes sem o paul cabannes",
    videoId: "2NwiK9QKbTo",
    cover: "https://i.ytimg.com/vi/2NwiK9QKbTo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCNC2bbd28mlW7sr7Ja3S0KutfL_g",
    link: "https://www.youtube.com/watch?v=2NwiK9QKbTo",
    categories: ["humor", "stand-up"]

  }
]
```
---
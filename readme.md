# FFF Clubs Scraper

Get all FFR Clubs ez

## Tech Stack

**Node:** 20.10.0

**NPM:** 10.2.5

## Installation

```bash
  git clone git@github.com:vassilidev/ffr-clubs.git
  
  cp .env.exemple .env
  
  yarn i
  
  node index.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MEILI_API_KEY` (inspect here : https://www.ffr.fr/trouver-un-club-de-rugby/resultats-de-recherche/)

`MEILI_API_HEADER_KEY` (X-Meili-Api-Key)

`SEARCH_URL` (https://commons-docker-meilisearch.ffr.nextmap.cloud/indexes/Clubs/search)

## Authors

- [@vassilidev](https://www.github.com/vassilidev)


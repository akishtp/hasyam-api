# Hasyam API

ശുദ്ധ ഹാസ്യം മരിച്ചിട്ടില്ല (Pure comedy is not dead). Get Malayalam, Manglish or a Random joke

## Authentication

No authentication is required to use the API. Enjoy :)

## Response Format

The response from the API will be in JSON format. Each joke object will contain the following properties:

```json
"_id" : "The unique identifier of the joke."
"joke" : "The text of the joke."
"language" : "The language of the joke."
```

## Usage limit

To prevent abuse and ensure fair usage, the API imposes the following limits:
Requests per minute: null
Requests per day: null

# Endpoints

## Fetch all

This endpoint retrieves all the jokes.

Endpoint:

`https://hasyam-api.onrender.com/`

Response:

```json
{
  "id": 1,
  "joke": "അമ്മാവൻ:ഡും ഡും...",
  "language": "Malayalam"
},
{
  "id": 2,
  "joke": "സർദാർജി അമേരിക്കയിൽ പോയി ✈️...",
  "language": "Malayalam"
}
```

## Fetch random

This endpoint retrieves a random Malayalam or Manglish joke.

Endpoint:

`https://hasyam-api.onrender.com/random`

Response:

```json
{
  "id": 32,
  "joke": "എതു തരം അപ്പത്തിനാണ് വട്ട് ?",
  "language": "Malayalam"
}
```

## Fetch Malayalam

This endpoint retrieves Malayalam jokes. probably why you want this API.

Endpoints:

`https://hasyam-api.onrender.com/malayalam`

`https://hasyam-api.onrender.com/malayalam/random`

Response:

```json
{
  "id": 1,
  "joke": "അമ്മാവൻ:ഡും ഡും...",
  "language": "Malayalam"
},
{
  "id": 2,
  "joke": "സർദാർജി അമേരിക്കയിൽ പോയി ✈️...",
  "language": "Malayalam"
}
```

## Fetch Manglish

This endpoint retrieves Manglish jokes.

Endpoints:

`https://hasyam-api.onrender.com/manglish`

`https://hasyam-api.onrender.com/manglish/random`

Response:

```json
{
  "id": "64981318a724d0ce987b5296",
  "joke": "Suresh vazhiyiloode pokumbol oru 2000...",
  "language": "Manglish"
},
{
  "id": "64984acf085ca11aae549b2a",
  "joke": "Gandhiji odicha car eth...",
  "language": "Manglish"
}
```

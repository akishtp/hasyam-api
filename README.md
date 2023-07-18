# Joke API

Welcome to the Joke API! This API allows you to retrieve jokes of various categories and styles to add humor and entertainment to your applications.

## Usage

To use the Joke API, send a GET request to the following endpoint:

```
https://api.jokeapi.com/v1/jokes/{category}
```

Replace `{category}` with the desired joke category. Here are some available categories:

- `general`: General jokes
- `programming`: Programming-related jokes
- `knock-knock`: Knock-knock jokes
- `pun`: Puns and wordplay jokes
- `spooky`: Spooky and Halloween-themed jokes

You can also specify additional parameters to customize the jokes you receive:

- `type`: Specify the type of joke, such as `single` for one-liners or `twopart` for jokes with a setup and punchline.
- `blacklistFlags`: Exclude jokes with certain characteristics, like `nsfw` for not-safe-for-work jokes or `racist` for racist jokes.

Example request:

```
GET https://api.jokeapi.com/v1/jokes/programming?type=single&blacklistFlags=nsfw
```

Example response:

```json
{
  "category": "programming",
  "type": "single",
  "joke": "Why do programmers prefer dark mode? Because light attracts bugs!"
}
```

## Response Format

The response from the Joke API will be a JSON object with the following structure:

```json
{
  "category": "Category of the joke",
  "type": "Type of the joke",
  "joke": "The joke itself",
  "setup": "Setup of the joke (only for twopart jokes)",
  "delivery": "Punchline of the joke (only for twopart jokes)"
}
```

- The `category` field represents the category of the joke.
- The `type` field indicates whether the joke is a single one-liner or a two-part joke with a setup and punchline.
- The `joke` field contains the joke itself.
- For two-part jokes, the `setup` field contains the setup of the joke, and the `delivery` field contains the punchline.

## Rate Limiting

The Joke API has a rate limit of 100 requests per hour per IP address. If you exceed this limit, you will receive a `429 Too Many Requests` response.

## Contributing

If you have any jokes or feature suggestions for the Joke API, feel free to submit a pull request to our [GitHub repository](https://github.com/example/joke-api). We appreciate your contributions!

## License

The Joke API is available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it in your applications, both personal and commercial.

## Disclaimer

Please note that the jokes provided by the Joke API may vary in content and humor. We strive to maintain a friendly and inclusive environment, so please avoid offensive or discriminatory use of the API.

Enjoy the jokes and have a good laugh! 😄

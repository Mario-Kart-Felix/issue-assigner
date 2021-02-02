# issue-assigner

> A GitHub App built with [Probot](https://github.com/probot/probot) that Probot app to automatically assign issues to maintainers in a round-robin fashion.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t issue-assigner .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> issue-assigner
```

## Contributing

If you have suggestions for how issue-assigner could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Patrick Hulce <patrick.hulce@gmail.com>

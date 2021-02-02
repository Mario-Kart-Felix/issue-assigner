# issue-assigner

> A GitHub Action built with [Probot](https://github.com/probot/probot) that automatically assigns issues to maintainers in a round-robin fashion.

## Usage

```sh
name: 'Issue assigner'

on:
  issues:
    types: [opened]

jobs:
  assign:
    runs-on: ubuntu-latest
    steps:
      - uses: patrickhulce/issue-assigner@v1
        with:
          GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}'
          maintainers: 'michaelscott,jimhalpert,dwightschrute'

```

## Contributing

If you have suggestions for how issue-assigner could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Patrick Hulce <patrick.hulce@gmail.com>

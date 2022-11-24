# Template starter

Đây là 1 template để cho 1 nhóm làm việc với nhau 1 cách hiệu quả nhất.

## Features

- Tất cả theo một chuẩn code style
- Bắt buộc quy chuẩn commit message

## Tech

This template uses a number of open source projects to work properly:

- [ReactJS] - With TypeScript
- [Vite] - Replacement for Create React App
- [TailwindCSS]
- [ESLint]
- [Prettier]
- [Husky] - Create git hooks easy
- [commitlint] - Do commit message convention properly

## Installation

Template requires [Node.js](https://nodejs.org/) v18+ to run.
Please use [Yarn](https://yarnpkg.com/getting-started/install) v1.+ to run the project.
Install the dependencies and devDependencies and start the server.

```sh
cd template
yarn
```

For development environments...

```sh
yarn dev
```

## Development

You will not be able to commit if your linting throw error or your commit message don't meet requiment.
Commit message need to be used with "adam-bender.commit-message-editor".
Husky will automatically run "yarn lint" before commit and will stop if you have lint error.

```bash
# lint all project
yarn lint

# format project using prettier
yarn format
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[husky]: https://github.com/typicode/husky
[reactjs]: https://beta.reactjs.org/
[eslint]: https://eslint.org/
[commitlint]: https://commitlint.js.org
[prettier]: https://prettier.io/
[tailwindcss]: https://tailwindcss.com/
[node.js]: http://nodejs.org
[vite]: https://vitejs.dev/guide/

# js-react-frontend-starter

Project Starter for Frontend JS projects - React

[![Build Status](https://app.travis-ci.com/rogerio-romao/eslint-preset-js-frontend.svg?branch=main)](https://app.travis-ci.com/rogerio-romao/eslint-preset-js-frontend)

## Features

-   ESLint custom config. Uses customized rules from ESLint, and several plugins
    such as unicorn, import, sonarjs, promise, as well as React specific plugins
    react and react-hooks.

-   CI - TravisCI integrated and configured, runs the linting and test commands
    on pull requests to main branch.

-   Vite based React minimal setup. Featuring fast build times, HMR, Typescript
    and JSX support out-of-the-box, assets and public folders, all CSS syntaxes,
    PostCSS compatibility and minification. Direct import of assets and JSON.

-   Gitignore file configured for all usual NodeJS/Javascript ignores.

-   Prettier config, explicit rules based on my VSCode Prettier settings, for
    consistency across projects or environments.

-   CSS reset & normalize.

-   Stylelint CSS linting, with custom rules, including the use of several
    plugins.

-   Pnpm as the package manager.

-   Vitest is the test runner, with sample test in the src folder and CI
    integrated.

-   Playwright E2E tests on all major browsers and CI integrated.

-   Main branch is protected and can only be pushed to by pull request. Husky
    pre-commit hook installed, runs all the linting and tests before commiting.

-   Dependabot installed and configured, to provide dependency updates and
    security warnings.

-   Scripts on package.json for linting js, linting css, and running tests. Both
    of the linting scripts have also a --fix option to fix any auto-fixable
    issues.

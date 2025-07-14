# Playwright installation
1) Nodejs
2) VS Code Editor
3) Create project folder  and  open it in VSCode
4) Install playwright  using terminal
  npm init playwright@latest

  package.json  --- node project management file
  playwright.config.js  -- playwright configuration
  tests --- we can all test playwright tests

  npm playwright -v   -- return installed version of playwright.
5) install playwright using vs code extension

# Run the playwright test
npx playwright test
npx playwright test --headed

# HTML report
npx playwright show-report
Inside that directory, you can run several commands:

# Other Important commands
  npx playwright test
  ** Runs the end-to-end tests.

  npx playwright test --ui
  ** Starts the interactive UI mode.

  npx playwright test --project=chromium
  ** Runs the tests only on Desktop Chrome.

  npx playwright test example
  ** Runs the tests in a specific file.

  npx playwright test --debug
  ** Runs the tests in debug mode.

  npx playwright codegen
  ** Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy Testing! 🎭
# Coffee Cart Playwright Tests

End-to-end tests for [Coffee Cart](https://coffee-cart.app), built with
[Playwright](https://playwright.dev/) and TypeScript.

The suite currently covers:

- Adding a coffee to the cart and completing checkout
- Translating a coffee title to Chinese by double-clicking it

## Prerequisites

- Node.js 22 or later
- npm

## Installation

Install the project dependencies and the Chromium browser used by the tests:

```bash
npm install
npx playwright install chromium
```

## Running tests

Run the full test suite in headless mode:

```bash
npm test
```

Run tests with a visible browser:

```bash
npm run test:headed
```

By default, tests run against `https://coffee-cart.app`. Set `BASE_URL` to
target another environment:

```bash
BASE_URL=https://your-environment.example npm test
```

On Windows PowerShell, set the variable for the command like this:

```powershell
$env:BASE_URL = "https://your-environment.example"; npm test
```

After a test run, open the HTML report with:

```bash
npm run report
```

Playwright captures screenshots and videos for failed tests and collects a
trace on the first retry.

## Project structure

```text
src/
  pages/              Page objects used by the tests
  test-data/          Data-only test inputs
tests/
  fixtures.ts         Shared Playwright fixtures
  checkout.spec.ts    Checkout flow
  menu.spec.ts        Menu translation flow
playwright.config.ts  Playwright configuration
```

## Continuous integration

GitHub Actions runs the suite on every push and pull request. The workflow
uses Node.js 22, installs Chromium with its system dependencies, and uploads
the Playwright HTML report as an artifact.

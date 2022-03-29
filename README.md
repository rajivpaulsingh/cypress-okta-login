<a href="https://www.cypress.io/"><img src="https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/logo/cypress-io-logo-round.svg" width="64"></a> [![NodeJs Logo](https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg)](https://nodejs.org/en/about/) [![Docker Logo](https://www.vectorlogo.zone/logos/docker/docker-icon.svg)](https://www.docker.com/) [![Git Logo](https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg)](https://git-scm.com/)

# QA Automated Tests 

This is the automation repository using the automation tool called [Cypress](https://www.cypress.io/). It contains both the API as well as UI tests. 
It has the following aspects:
- Page objects
- API and UI tests
- Various ways of running the tests (via npm scripts)
- Data-driven techniques
- Logging capabilities
- Integration with Docker
- Integration with Git CI/CD
- Integration with Mochawesome report
- Test analytics in Cypress Dashboard

Cypress is a great new generation tool. All the tests run in the actual browser. Although it does not support all the browsers for now. Running the tests in headless mode is a piece of cake

## Requires
1. [Node](https://nodejs.org/en/)
1. [Git](https://git-scm.com/)
1. [Cypress](https://www.cypress.io/)
1. [Docker](https://www.docker.com/)

## Setup
1. Clone the repository
1. Install: `npm install`
1. Ensure cypress can run: `npx cypress open`

## Folder structure
These folders hold end-to-end tests and supporting files for the Cypress Test Runner.
1. [fixtures](./cypress/fixtures) holds optional JSON data for mocking,
2. [integration](./cypress/integration) holds the actual test files,
3. [plugins](./cypress/plugins) allow you to customize how tests are loaded,
4. [support](./cypress/support) file runs before all tests and is a great place to write or load additional custom commands,

## Tests
| Type | Location                                             |
| ---- | ---------------------------------------------------- |
| api  | [cypress/integration/api-tests](./cypress/integration/api-tests) |
| ui   | [cypress/integration/ui-tests](./cypress/integration/ui-tests)   |

## Run Them Tests
1. All the tests: `npm test`
1. Just the api tests: `npm run cy:run:api`
1. Just the ui tests: `npm run cy:run:ui`
1. Headless mode: `npm run cy:run:headless`

## Browsers supported
1. Chrome
1. Firefox
1. Edge
2. Electron

---
## Sample Run

![](janus-cypress-tests.gif)

**_"Copyright (c) 2021 by Boston Consulting Group, All rights reserved"_**


![image](https://th.bing.com/th/id/R3fad82edd172a41bfa827594544a429b?rik=Y6L27WDIF0VyWQ&pid=ImgRaw)
# Rwanda carbon tracker

## Project description

Invest in Rwanda Carbon Credits is an engaging and user-friendly online platform that makes it easy to discover the economic and environmental potential benefits of carbon market investment in Rwanda. With clear and concise information presented in an intuitive format, the platform is designed to provide a comprehensive resource for showcasing Rwanda's carbon-related opportunities and commitments. Whether you are a seasoned investor or new to the world of carbon market investment and looking to contribute to a cleaner, greener future, Invest in Rwanda Carbon Credits provides the tools and resources to help you take action.

![RwandaCarbonTracker](https://user-images.githubusercontent.com/33252015/221893127-1b0c19ec-1267-438f-95f3-990f250e8cca.jpg)

The website was inspired by UNDP's vision of a better, more sustainable future for Rwanda. It includes estimations of the potential impacts of carbon market investment in terms of CO₂ reduction, revenue generation, and job creation. The platform showcases a series of national goals for carbon reduction, land use, water management, and energy efficiency. Invest in Rwanda Carbon Credits serves as a starting point to monitor Rwanda's carbon-related commitments as part of the national plan to achieve a carbon-neutral economy.

## Project implementation

This platform is built upon [Vizzuality's scaffold project](https://github.com/Vizzuality/front-end-scaffold)and it's using the following resources:

- [React](https://reactjs.org/) as a UI library
- [Next.js](https://nextjs.org/) as a framework
- [Tailwind CSS](https://tailwindcss.com/) as a styles framework
- [Storybook](https://storybook.js.org/) as a sandbox for the UI components
- [React Aria](https://react-spectrum.adobe.com/react-aria/index.html) to facilitate the application's accessibility

The application's design files can be found here:

- [Design system](https://www.figma.com/proto/UDiw9RqJTBvxqQSaWjYR9G/Rwanda-Carbon-v03-%5BShared%5D?page-id=287%3A3647&node-id=287%3A3991&viewport=-1084%2C19%2C0.1&scaling=scale-down&starting-point-node-id=287%3A3991&show-proto-sidebar=1)

## Quick start

In order to start modifying the app, please make sure to correctly configure your workstation:

1. Make sure you you have [Node.js](https://nodejs.org/en/) installed
2. (Optional) Install [NVM](https://github.com/nvm-sh/nvm) to manage your different Node.js versions
3. (Optional) Use [Visual Studio Code](https://code.visualstudio.com/) as a text editor to benefit from automatic type checking
4. Configure your text editor with the [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [EditorConfig](https://editorconfig.org/), [Tailwind CSS](https://tailwindcss.com/docs/plugins) (recommended) and [Headwind](https://github.com/heybourn/headwind) (recommended) plugins
5. (Optional) Configure your editor to “format [code] on save” with ESLint and Prettier **(1)**
6. Use the correct Node.js version for this app by running `nvm use`; if you didn't install NVM (step 2), then manually install the Node.js version described in `.nvmrc`
7. Install the dependencies: `yarn`
8. Run the server: `yarn dev`
9. Run storybook if you want to visualize the components: `yarn storybook:dev`

You can access a hot-reloaded version of the app on [http://localhost:3000](http://localhost:3000).

## CI/CD

When a pull request (PR) is created, a GitHub action runs the tests (`yarn test`).

When a PR is merged to the `main` branch, the same process is also executed and the application is deployed to the production environment: https://rwanda-carbon-tracker.vercel.app/.

It is recommended to mention the Jira task ID either in commits or the branch names so that the deployment information can be directly available in Jira.

## Contribution rules

Please, **create a PR** for any improvement or feature you want to add. Use the `develop` branch for this.

## Vulnerability mitigation

[Dependabot's vulnerability security alerts](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) are configured in this repository and are displayed to the administrators.

When vulnerabilities are detected, a warning message is displayed at the top of the repository. The list of alerts can be found in the [Dependabot alerts page](https://github.com/Vizzuality/rwanda-carbon-tracker/security/dependabot).

Here's a step by step guide on how to address vulnerabilities found in production code:

1. Go to the [Dependabot alerts page](https://github.com/Vizzuality/rwanda-carbon-tracker/security/dependabot) and locate the front-end vulnerability to address
2. Identify if the vulnerability affects production code:
   - To do so run `yarn npm audit --recursive --environment production`
   - If the dependency is _not_ listed by this command, then the vulnerability only affects development code. You can dismiss the alert on GitHub as “Vulnerable code is not actually used” in the top right corner of the vulnerability page.
   - If the dependency _is_ listed, follow the steps below.
3. On the vulnerability page, click the “Create Dependabot security update” button
   - This will create a Pull Request with a fix for the vulnerability. If GitHub can generate this PR, then you can merge and the security alert will disappear.
   - If the vulnerability can't be patched automatically, follow the steps below.
4. If the action fails, then you can semi-automatically update the vulnerable dependency by running `npm_config_yes=true npx yarn-audit-fix --only prod`
   - `yarn-audit-fix` (see [repository](https://github.com/antongolub/yarn-audit-fix)) is a tool that applies the fixes from `npm audit fix` to Yarn installations
   - The tool might also not be able to fix the vulnerability. If so, continue with the steps below.
5. If the action fails, then you will have to manually update the dependencies until the vulnerability is solved

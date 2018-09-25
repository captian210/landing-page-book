<h1 style="text-align: center;">
    <a href="http://front10.com/">
        <img src="./assets/images/logo/logo-frton10.jpg" alt="Front10 Component Explorer" width="200">
    </a>
</h1>

# Landing Page Book

`@front10/landing-page-book` is a kit of landing-page components to be share across the web.

| Documentation | Browser test |
| ------------- | ------------ |

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) 
[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=TU1IbU5FWi9nWGxSK3hLZE5ENkpqWWwvd2lkbGd2ZDAzVHZ1L09iSm5Kcz0tLXdYcnZxQXdpSmV6V3pCRmh3L21POHc9PQ==--5cbfc92590d6cb11fd728c5e914525c616ca663b)](https://www.browserstack.com/automate/public-build/TU1IbU5FWi9nWGxSK3hLZE5ENkpqWWwvd2lkbGd2ZDAzVHZ1L09iSm5Kcz0tLXdYcnZxQXdpSmV6V3pCRmh3L21POHc9PQ==--5cbfc92590d6cb11fd728c5e914525c616ca663b)

## Setup

```sh
npm install
npm start
```

## Available Components

| Main components  |   |   | |
|---	|---	|---	|---  |
|- [`Navbar`](https://github.com/front10/landing-page-book/tree/master/src/components/Navbar)|- [`BackersOpenCollective`](https://github.com/front10/landing-page-book/tree/master/src/components/BackersOpenCollective)|- [`ImageList`](https://github.com/front10/landing-page-book/tree/master/src/components/ImageList)| - [`Image`](https://github.com/front10/landing-page-book/tree/master/src/components/Image)
|- [`Hero`](https://github.com/front10/landing-page-book/tree/master/src/components/Hero)|- [`Team`](https://github.com/front10/landing-page-book/tree/master/src/components/Team)|- [`Location`](https://github.com/front10/landing-page-book/tree/master/src/components/Location) | - [`Icon`](https://github.com/front10/landing-page-book/tree/master/src/components/Icon)
|- [`Section`](https://github.com/front10/landing-page-book/tree/master/src/components/Section)|- [`Sponsors`](https://github.com/front10/landing-page-book/tree/master/src/components/Sponsors)|- [`Social`](https://github.com/front10/landing-page-book/tree/master/src/components/Social) | - [`Input`](https://github.com/front10/landing-page-book/tree/master/src/components/Input)
|- [`Features`](https://github.com/front10/landing-page-book/tree/master/src/components/Features)|- [`BuiltWith`](https://github.com/front10/landing-page-book/tree/master/src/components/BuiltWith)|- [`Video`](https://github.com/front10/landing-page-book/tree/master/src/components/Video)| - [`Label`](https://github.com/front10/landing-page-book/tree/master/src/components/Label) |
|- [`GithubButton`](https://github.com/front10/landing-page-book/tree/master/src/components/GithubButton)|- [`ContactInfo`](https://github.com/front10/landing-page-book/tree/master/src/components/ContactInfo)|- [`LanguageSwitcher`](https://github.com/front10/landing-page-book/tree/master/src/components/LanguageSwitcher) | - [`Link`](https://github.com/front10/landing-page-book/tree/master/src/components/Link)|
|- [`Code`](https://github.com/front10/landing-page-book/tree/master/src/components/Code)|- [`ContactUs`](https://github.com/front10/landing-page-book/tree/master/src/components/ContactUs)|- [`Wizard`](https://github.com/front10/landing-page-book/tree/master/src/components/Wizard) | - [`TextBox`](https://github.com/front10/landing-page-book/tree/master/src/components/TextBox)
|- [`BrowserSupport`](https://github.com/front10/landing-page-book/tree/master/src/components/BrowserSupport)|- [`Copyright`](https://github.com/front10/landing-page-book/tree/master/src/components/Copyright)| - [`Browser`](https://github.com/front10/landing-page-book/tree/master/src/components/Browser) | - [`Card`](https://github.com/front10/landing-page-book/tree/master/src/components/Card)
|- [`Gif`](https://github.com/front10/landing-page-book/tree/master/src/components/Gif)|- [`Donation`](https://github.com/front10/landing-page-book/tree/master/src/components/Donation)| - [`Button`](https://github.com/front10/landing-page-book/tree/master/src/components/Button)
|- [`Backers`](https://github.com/front10/landing-page-book/tree/master/src/components/Backers)|- [`Footer`](https://github.com/front10/landing-page-book/tree/master/src/components/Footer)| - [`Header`](https://github.com/front10/landing-page-book/tree/master/src/components/Header)


| Third-Party integrations                                                                                               |                                                                                                                |                                                                                                    |                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| - [`GoogleAnalytics`](https://github.com/front10/landing-page-book/tree/master/src/components/Analytics/Analytics.jsx) | - [`GoogleMap`](https://github.com/front10/landing-page-book/tree/master/src/components/Location/Location.jsx) | - [`Github`](https://github.com/front10/landing-page-book/tree/master/src/components/GithubButton) | - [`OpenCollective`](https://github.com/front10/landing-page-book/tree/master/src/components/BackersOpenCollective/BackersOpenCollective.jsx) |

## Usage

```js
import React, { Component } from 'react';
import { Hero, Navbar, Team } from '@front10/landing-page-book/dist/components';
```

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@front10/landing-page-book/dist/themes/default/style.css';
```

```jsx
class App extends Component {
  render() {
    <div className="App">
      <Navbar companyLink="https://front10.com" companyLogo="logo.png" companyName="Front10" />
      <Hero header="Landing Page Book" subHeader="Some cool text" />
    </div>;
  }
}
```

### Custom styles

https://github.com/front10/landing-page-book/blob/master/theming.md

## Tests

```bash
npm test
```

## Coding styles

- [Airbnb Styleguide](https://github.com/airbnb/javascript/tree/master/react)

## Built With

- [React](https://reactjs.org/)
- [React StoryBook](https://storybook.js.org)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Front10** - _Initial work_ - [Front10](http://front10.com/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Browsers support

| [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/archive/chrome_12-48/chrome_12-48_48x48.png" alt="Chrome" width="24px" height="24px" />](https://gitlab.com/front10-devs/healthcare-book)</br>Chrome | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://gitlab.com/front10-devs/healthcare-book)</br>IE / Edge | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://gitlab.com/front10-devs/healthcare-book)</br>Firefox | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://gitlab.com/front10-devs/healthcare-book)</br>Opera | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://gitlab.com/front10-devs/healthcare-book)</br>Safari | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](https://gitlab.com/front10-devs/healthcare-book)</br>iOS Safari | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](https://gitlab.com/front10-devs/healthcare-book)</br>Samsung | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/archive/android/android_48x48.png" alt="Android" width="24px" height="24px" />](https://gitlab.com/front10-devs/healthcare-book)</br>Android |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| >=45                                                                                                                                                                                                                        | >=10/>=12                                                                                                                                                                                                 | >=38                                                                                                                                                                                                        | >=30                                                                                                                                                                                                | >=9                                                                                                                                                                                                     | >=9.0                                                                                                                                                                                                                   | >=6.2                                                                                                                                                                                                                         | >=4.4                                                                                                                                                                                                               |

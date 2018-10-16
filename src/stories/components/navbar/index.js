import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Navbar,
  NavbarNav,
  Input,
  LanguageSwitcher,
  NavbarLink,
  Icon,
  Container,
  NavbarCollapse,
  NavbarBrand,
  Image
} from '../../../components';
import Readme from '../../../components/Navbar/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components/Navbar', module);

stories.addDecorator(withKnobs);

const leftItems = [
  {
    title: 'Google',
    href: 'https://google.com',
    target: '_blank',
    icon: 'fa fa-google'
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    target: '_blank',
    icon: 'fa fa-facebook-official'
  }
];

const rightItems = [
  {
    title: 'Services'
  },
  {
    title: 'Contact'
  }
];

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Navbar
        transparent={boolean('Transparent', false)}
        fixed={boolean('Fixed', false)}
        brandName={text('Brand name', '')}
        brandLink={text('Brand link', 'https://front10.com')}
        brandLogo={text('Brand logo', 'images/logo/front10.png')}
        expand={select(
          'Expand',
          {
            sm: 'sm',
            md: 'md',
            lg: 'lg'
          },
          'md'
        )}
        rightItems={rightItems}
        leftItems={leftItems}
        className="mb-2"
      />
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Mode container',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Navbar expand="md">
        <Container>
          <NavbarCollapse>
            <NavbarBrand>
              <Image
                width="120"
                src={text(
                  'Brand logo',
                  'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg'
                )}
                alt="Webpack logo"
              />
            </NavbarBrand>
            <NavbarNav alignItems="right">
              <NavbarLink>Documentation</NavbarLink>
              <NavbarLink>Contribute</NavbarLink>
              <NavbarLink>Vote</NavbarLink>
              <NavbarLink>Blog</NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-search" />
              </NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-github" />
              </NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-stack-overflow" />
              </NavbarLink>
              <LanguageSwitcher showArrow={false} selectedLanguage="US" />
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Reversed',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Navbar expand="md">
        <Container>
          <NavbarCollapse>
            <NavbarNav>
              <LanguageSwitcher showArrow={false} selectedLanguage="US" />
              <NavbarLink>
                <Icon icon="fa fa-stack-overflow" />
              </NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-github" />
              </NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-search" />
              </NavbarLink>
              <NavbarLink>Blog</NavbarLink>
              <NavbarLink>Vote</NavbarLink>
              <NavbarLink>Contribute</NavbarLink>
              <NavbarLink>Documentation</NavbarLink>
            </NavbarNav>
            <NavbarNav alignItems="right">
              <NavbarBrand>
                <Image
                  width="120"
                  src={text(
                    'Brand logo',
                    'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg'
                  )}
                  alt="Webpack logo"
                />
              </NavbarBrand>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Via children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Navbar expand="md">
        <NavbarCollapse>
          <NavbarBrand>
            <Image
              width="120"
              src={text(
                'Brand logo',
                'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg'
              )}
              alt="Webpack logo"
            />
          </NavbarBrand>
          <NavbarNav alignItems="right">
            <NavbarLink>Documentation</NavbarLink>
            <NavbarLink>Contribute</NavbarLink>
            <NavbarLink>Vote</NavbarLink>
            <NavbarLink>Blog</NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-search" />
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-github" />
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-stack-overflow" />
            </NavbarLink>
            <LanguageSwitcher showArrow={false} selectedLanguage="US" />
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'With search',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Navbar
        transparent={boolean('Transparent', false)}
        fixed={boolean('Fixed', false)}
        brandName={text('Brand name', 'Front10')}
        brandLink={text('Brand link', 'https://front10.com')}
        brandLogo={text('Brand logo', 'images/logo/front10.png')}
        expand={select(
          'Expand',
          {
            sm: 'sm',
            md: 'md',
            lg: 'lg'
          },
          'md'
        )}
      >
        <NavbarNav alignItems="right">
          <Input placeholder="Search" icon="fa fa-search" />
        </NavbarNav>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'With user photo',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Navbar expand="md">
        <NavbarCollapse>
          <NavbarBrand>
            <Image
              width="120"
              src={text(
                'Brand logo',
                'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg'
              )}
              alt="Webpack logo"
            />
          </NavbarBrand>
          <NavbarNav alignItems="right">
            <NavbarLink>
              <Icon icon="fa fa-search" />
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-github" />
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-stack-overflow" />
            </NavbarLink>
            <LanguageSwitcher showArrow={false} selectedLanguage="US" />
            <NavbarLink href="https://twitter.com/ycgarrido">
              <Image
                className="mr-2"
                rounded
                width="30"
                src="https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg"
              />
              ycgarrido
            </NavbarLink>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);

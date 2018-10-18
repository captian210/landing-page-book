import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Team } from '../../../components';
import Readme from '../../../components/Team/README.md';

const members = [
  {
    image: 'images/team/ninja.svg',
    name: 'Leonardo',
    job: 'Ninja',
    summary:
      'Leonardo, nickname Leo, is a fictional character and one of the four main characters in the Teenage Mutant Ninja Turtles comics and related media.',
    profile: [
      {
        social: 'facebook',
        url: 'https://www.facebook.com/JavaScriptTeam/'
      },
      {
        social: 'twitter',
        url: 'https://twitter.com/front10hello?lang=es'
      }
    ]
  },
  {
    image: 'images/team/bohemian.svg',
    name: 'Van Gogh',
    job: 'Painter',
    summary:
      'He was a Dutch painter, one of the main exponents of post-impressionism, he painted some 900 paintings and made more than 1,600 drawings.',
    profile: [
      {
        social: 'facebook',
        url: 'https://www.facebook.com/JavaScriptTeam/'
      },
      {
        social: 'email',
        url: 'https://front10.com'
      }
    ]
  },
  {
    image: 'images/team/astronaut.svg',
    name: 'Neil',
    job: 'Astronaut',
    summary:
      'American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor.',
    profile: [
      {
        social: 'facebook',
        url: 'https://www.facebook.com/JavaScriptTeam/'
      },
      {
        social: 'twitter',
        url: 'https://twitter.com/front10hello?lang=es'
      }
    ]
  }
];

setAddon(JSXAddon);

const stories = storiesOf('Components/Team', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <Team
        showBorder={boolean('Show border', true)}
        showName={boolean('Show name', true)}
        showImage={boolean('Show image', true)}
        showJob={boolean('Show job', true)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', true)}
        imageBorder={boolean('Image border', false)}
        socialGray={boolean('Social gray', false)}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        members={members}
      />
    </ThemeSelector>
  )),
  jsxConfig
);

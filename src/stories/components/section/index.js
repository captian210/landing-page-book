import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Section, Video, Button, Container, Code, Row, Column } from '../../../components';
import Readme from '../../../components/Section/README.md';

import { def, twoColumnText } from '../../mock/components/codes/section';

setAddon(JSXAddon);

const stories = storiesOf('Components/Section', module);

stories.addDecorator(withKnobs);

const pStyle = {
  color: '#3d3d3d'
};

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Section"
        description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
      />

      <Section
        gray={boolean('Gray', true)}
        title={text('Title', 'Introduction')}
        subTitle={text('Subtitle', 'Once upon a time...')}
      >
        <Container className="text-left">
          <p style={pStyle}>
            Once upon a time, there was a boy named James. He always got pushed around. One day, a
            wizard appeared in front of the boy. The wizard gave James three wishes. One of James
            wishes was that tge wizard could make James go away. The next day James tried to make a
            wish, but he found himself to be in the land of the forgotten.
          </p>
        </Container>
      </Section>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'With Video',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Section"
        storyName="With Video"
        description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
      />
      <Section
        gray={boolean('Gray', false)}
        title={text('Title', 'WHAT WE DO')}
        subTitle={text('Subtitle', 'One Look Is Worth A Thousand Words.')}
      >
        <Container className="text-center">
          <Video source="https://youtu.be/dCrLwWdju68" />
          <Button className="mt-5">Explore</Button>
        </Container>
      </Section>
      <Code code={def} languageCode="jsx" readOnly collapsible collapsed showDeleteButton={false} />
    </ThemeSelector>
  )),
  jsxConfig
);

// const featuress = [
//   {
//     id: 1,
//     image: 'images/features/themes.png',
//     title: 'Theming',
//     subtitle: 'Easy to create themes',
//     summary: 'Library customization with Css variables for easy theming and component changes.',
//     link: 'https://front10.com',
//     linktext: 'See more...'
//   },
//   {
//     id: 2,
//     image: 'images/features/testing.png',
//     title: 'Unit test',
//     subtitle: 'Robust components',
//     summary: 'All our components tested, like a Swiss watch. With code coverage above 50%',
//     link: 'https://front10.com',
//     linktext: 'See more...'
//   }
// ];

// stories.addWithJSX(
//   'With Features',
//   withReadme([Readme], () => (
//     <ThemeSelector>
//       <StoryHeader
//         name="Section"
//         storyName="With Features"
//         description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
//       />
//       <Section
//         gray={boolean('Gray', false)}
//         title={text('Title', 'WHAT WE DO')}
//         subTitle={text('Subtitle', 'One Look Is Worth A Thousand Words.')}
//       >
//         <Container className="text-center">
//           <Features
//             showBorder={false}
//             showTitle
//             showImage
//             showSubtitle={false}
//             showSummary
//             imageCircle={false}
//             imageBorder={false}
//             contentAlign="center"
//             features={featuress}
//           />
//         </Container>
//       </Section>
//     </ThemeSelector>
//   )),
//   jsxConfig
// );

stories.addWithJSX(
  'Two Columns Text',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Section"
        storyName="With Video"
        description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
      />
      <Section
        gray={boolean('Gray', false)}
        title={text('Title', 'WHAT WE DO')}
        subTitle={text('Subtitle', 'One Look Is Worth A Thousand Words.')}
      >
        <Container className="text-justify">
          <Row>
            <Column className="col-12 col-sm-6">
              <p style={pStyle}>
                Once upon a time, there was a boy named James. He always got pushed around. One day,
                a wizard appeared in front of the boy. The wizard gave James three wishes. One of
                James wishes was that tge wizard could make James go away. The next day James tried
                to make a wish, but he found himself to be in the land of the forgotten.
              </p>
            </Column>
            <Column className="col-12 col-sm-6">
              <p style={pStyle}>
                Once upon a time, there was a boy named James. He always got pushed around. One day,
                a wizard appeared in front of the boy. The wizard gave James three wishes. One of
                James wishes was that tge wizard could make James go away. The next day James tried
                to make a wish, but he found himself to be in the land of the forgotten.
              </p>
            </Column>
          </Row>
        </Container>
      </Section>
      <Code
        code={twoColumnText}
        languageCode="jsx"
        readOnly
        collapsible
        collapsed
        showDeleteButton={false}
      />
    </ThemeSelector>
  )),
  jsxConfig
);

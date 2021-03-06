import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Card, Link, Row, Column } from '../../../components';
import Readme from '../../../components/Card/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Elements/Card', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <PropsManager colColumn="col-12 col-md-6" scope={{ React, Card }}>
        {`<Card
    title="Sky"
    summary="Sky is often defined as the space in which the stars move and by visual effect seems to surround the Earth. In astronomy, sky is synonymous with the celestial sphere: an imaginary vault on which the Sun, stars, planets and the Moon are distributed."
    image="images/card/image1.jpg"
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
stories.add(
  'With Subtitle',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="With Subtitle"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <PropsManager colColumn="col-12 col-md-6" scope={{ React, Card }}>
        {`<Card
    title="Neil Armstrong"
    subTitle="First man in the moon"
    summary="American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor."
    image="images/card/image2.jpg"
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
stories.add(
  'Only summary',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="Only summary"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <PropsManager colColumn="col-12 col-md-6" scope={{ React, Card }}>
        {`<Card
    shadow
    summary="The galaxy of the Milky Way, or simply the Milky Way, is a spiral galaxy where the solar system is located and in turn the Earth is located. According to the observations, it has a mass of 10???? solar masses and is a barred spiral."
    image="images/card/image3.jpg"
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
stories.add(
  'With Footer',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="With Footer"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <PropsManager colColumn="col-12 col-sm-6" scope={{ React, Row, Link, Column, Card }}>
        {`<Card
        title="Saturn"
        summary="Saturn is the sixth planet in the solar system, the second in size and mass after Jupiter and the only one with a ring system visible from Earth. Its name comes from the Roman god Saturn. It is part of the so-called outer or gaseous planets."
        image="images/card/image4.jpg"
    >
        <Row>
            <Column className="text-left">
                <Link href="https://es.wikipedia.org/wiki/Saturno_(planeta)" target="_blank">
                  See more
                </Link>
            </Column>
            <Column className="text-right">
                <span className="text-muted">21 views</span>
            </Column>
        </Row>
    </Card>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
stories.add(
  'Floating image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="Floating image"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <PropsManager colColumn="col-12 col-sm-6" scope={{ React, Card }} skip={3}>
        {`<Card
    borderNone
    summaryTextAlign="center"
    summary="A star is a luminous plasma sphere that maintains its shape thanks to its own gravity. The closest star to Earth is the Sun."
    image="images/card/image5.jpg"
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

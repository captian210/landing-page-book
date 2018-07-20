import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {
	Header,
	Hero,
	Section,
	Video,
	Team,
	Container,
	BuiltWith,
	ContactUs
} from '../../../components';

const rightItems = [{
	title: "Our Services"
}, {
	title: "What we do"
}, {
	title: "The Process"
}, {
	title: "Founders"
}, {
	title: "Contact"
}];

const services = [{
	image: "images/demo/default.svg",
	name: "Component libraries",
	summary: "React & AngularJs reusable component libraries creation."
}, {
	image: "images/demo/default.svg",
	name: "Project acceleration",
	summary: "Help you to accelerate and scale your Front-End projects."
}, {
	image: "images/demo/default.svg",
	name: "Consulting",
	summary: "More than 10 years of experience doing Front-End development."
}];

const team = [{
	image: "https://front10.com/img/team/dariel.jpeg",
	name: "Dariel Vila",
	job: "Co-Founder"
},{
	image: "https://front10.com/img/team/albe.jpeg",
	name: "Alberto Roman",
	job: "Co-Founder"
}];

const frameworks = [{
	image: "images/frameworks/react.png"
}, {
	image: "images/frameworks/angularjs.png"
}, {
	image: "images/frameworks/graphql.png"
}, {
	image: "images/frameworks/storybook.png"
}];

const buttons = [{
	text: "TELL ME MORE",
	onClick: ({button}) => {
		alert(`You has clicked ${button.text}`)
	}
}];

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.add('Front10', () => {
	return (
  <ThemeSelector>
    <Header
      companyName="Front10"
      companyLink="https://front10.com"
      companyLogo="images/logo/front10.png"
      rightItems={rightItems}
    />
    <Hero
      overlayColor="#383d45"
      opacity={1}
      subHeaderPosition="top"
      subHeader="Leverage your process!"
      header="REACT & ANGULARJS COMPONENTS"
      buttons={buttons}
    />
    <div className="mt-5">
      <Section
        title="OUR SERVICES"
        subTitle="We do scalable Front-End development 3x faster."
      >
        <Team
          members={services}
          imageBorder
          showBorder={false}
        />
      </Section>
      <Section
        gray
        title="WHAT WE DO"
        subTitle="One Look Is Worth A Thousand Words."
      >
        <Video source="https://youtu.be/dCrLwWdju68" />
      </Section>
      <Section
        title="OUR FOUNDERS"
        subTitle="Dariel & Alberto."
      >
        <Container>
          <Team
            members={team}
            imageBorder
            showBorder={false}
            socials={["twitter", "facebook", "linkedin"]}
            socialGray
          />
        </Container>
      </Section>
      <Section gray>
        <Container>
          <BuiltWith
            companies={frameworks}
            gray
          />
        </Container>
      </Section>
      <Hero
        isFixed={false}
        image="images/hero/map-image.png"
        particles={false}
        backgroundColor="#383d45"
      >
        <ContactUs />
      </Hero>
    </div>
  </ThemeSelector>
	);
});
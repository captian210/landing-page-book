export default {
  name: 'Section',
  summary:
    'A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information.',
  import: '',
  withStyles: true,
  extractProps: ['title', 'subTitle'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Section bgColor="light" title="Introduction" subTitle="Once upon a time...">
    <Container>
        <Paragraph text={\`Once upon a time, there was a boy named James. 
        He always got pushed around. One day, a wizard appeared in front of the boy. 
        The wizard gave James three wishes. One of James wishes was that tge 
        wizard could make James go away. The next day James tried to make a wish, 
        but he found himself to be in the land of the forgotten.\`} />
    </Container>
</Section>`,
      tabsActive: ['code']
    },
    {
      name: 'With Video',
      summary: '',
      code: `<Section title="WHAT WE DO" subTitle="One Look Is Worth A Thousand Words."  textAlign="center">
    <Container>
        <Video source="https://youtu.be/dCrLwWdju68"/>
        <Button color="warning">Explore</Button>
    </Container>
</Section>`,
      tabsActive: []
    },
    {
      name: 'Two Columns Text',
      summary: '',
      code: `<Section title="WHO WE ARE ?" subTitle="One Look Is Worth A Thousand Words.">
    <Container className="text-justify">
        <Row>
            <Column className="col-12 col-sm-6">
                <Paragraph text={\`We are a group of talented software developers with more than 
                10 years of experience creating front-end applications. We are tired to see how many
                 brilliant minds are reworking in the same thing because there are not 
                 standar and defined processes. We are tired of seeing how many companies are 
                 struggling to find good programmers. We are tired of seeing how there a lot of 
                 software in a trash because somebody does not defined the requirements at the right time.\`} />
            </Column>
            <Column className="col-12 col-sm-6">
                <Paragraph text={\`We are tired of seeing great people which talent is not being used 
                100% because they had not being trained in a proper way. We are tired of seeing 
                projects that ended up in a failure just because the team that executed them does not
                receive the proper advice in time. We are tired of seeing companies investing a lot 
                of money building software that does not scale.\`} />
                <Paragraph text={\`We are the guys that believes that fixing all this issues is critical
                for our civilization. We are the guys that are going to go to the roots of all of this
                problems and are going to fixed it.\`} />
            </Column>
        </Row>
    </Container>
</Section>`,
      tabsActive: []
    },
    {
      name: 'Two Columns Cards',
      summary: '',
      code: `<Section
    title="COMPONENT-DRIVEN DEVELOPMENT"
    subTitle="Build UIs in a better way: from the component up">
  <Container className="text-justify">
    <Row>
      <Column className="col-12 col-md-6">
        <div>
          <Card
            contentAlign="left"
            image="https://front10.com/landing-page-book/images/card/image1.jpg"
            imageCircle={false}
            subTitle="A tool for Component-Driven Development"
            summary={\`A component explorer is a separate application which showcases the components in 
            your app in various test ???states???. A state is essentially a visual test case an typical input 
            to the component.\`}
            title="Component Explorer"/>
        </div>
      </Column>
      <Column className="col-12 col-md-6">
        <Paragraph text={\`He biggest trend in frontend user interface (UI) development for the web
                in recent years has been towards components. The React library, although by no means the first,
                has in large part established patterns for building UIs out of well specified component parts.\`} />
        <Paragraph text={\`Of course, the trend toward software built from smaller pieces that perform 
                a well-specified role is nothing new; modularization has been one of the key tenets of software
                engineering since long before I learned the concepts of ???coupling and cohesion???.\`} />
      </Column>
    </Row>
  </Container>
</Section>`,
      tabsActive: []
    }
  ]
};

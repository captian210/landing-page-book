import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkScroll, Element } from 'react-scroll';
import {
  // Section,
  Column,
  Row,
  Link,
  // Icon,
  Header,
  Paragraph,
  // NavbarCollapse,
  // Button,
  Container
} from '../../../src/components';

import PropsManager from '../PropsManager';
import './style.css';

const image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAS1BMVEUAAABmd4hggI9peIdkeoVidoloe45mdYpmeIpneIpmeItneIpmeIpmeYpmd4pmeIlmeIpmeIpmeIpmeIpmeItmeIpmeIpmeIr////qXIHVAAAAF3RSTlMADxARFxobI7u9xcfIy83O0tTY2tvu9cW9EVEAAAABYktHRBibaYUeAAAATElEQVQY02NgIA6wCHCh8gXFuZH5bMLiPIx4+ED1QuzMUAAS4BdHAjxAAT5xcTFRGOAECjDxiouwoVgKFBHGFGFFdxgPmtN5OBiIBgBwewSBxP8LIAAAAABJRU5ErkJggg==';

class DetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toogle = this.toogle.bind(this);
  }

  toogle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  renderNavigationsStories() {
    const { stories } = this.props;
    return (
      <div className="storiesList d-none d-lg-block">
        <ul>
          {stories.map(story => (
            <li key={story.name}>
              <LinkScroll
                activeClass="active"
                to={story.name}
                spy
                smooth
                hashSpy
                duration={500}
                isDynamic
              >
                {story.name}
              </LinkScroll>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const {
      name,
      linkGithub,
      description,
      stories,
      pagePushed,
      propsDescription,
      showBack
    } = this.props;
    // const { open } = this.state;
    return (
      <div id="container" className={`page ${pagePushed ? 'pushed' : ''}`}>
        {/* <Section sectionClass="p-2 title-component" gray> */}
        <div className="title-component bg-light p-2">
          <Container className="pb-4 pt-3 prl-11">
            {showBack && (
              <Link href="/components" tooltip="Go Back" className="btn btn-back btn-everblue">
                <img src={image} alt="Go Back" />
              </Link>
            )}
            <Header type="h2" className="name title-component d-inline">
              {name}
            </Header>
            <Link
              className="btn btn-everblue pull-right pt-2"
              href={linkGithub}
              tooltip="View on Github"
              target="_blank"
            >
              <span>View on Github</span>
            </Link>
          </Container>
        </div>
        {/* </Section> */}
        <div className="container prl-11">
          <Row>
            <Column className={`${stories.length > 1 ? 'col-11' : 'col-12'} pt-4`}>
              <Header type="h4" className="name mb-2">
                Intro
              </Header>
              <Paragraph fontWeight="light" text={description} />
              {stories.map(story => (
                <Element name={story.name} className="element pb-4" key={story.name}>
                  <Header type="h3" className="mt-3">
                    {story.name}
                  </Header>
                  <Paragraph fontWeight="light" text={story.summary} />
                  <PropsManager
                    propsDescription={propsDescription}
                    active={story.tabsActive}
                    cssVariables={story.cssVariables}
                    columnSize={story.columnSize}
                    columnAlign={story.columnAlign}
                  >
                    {story.code}
                  </PropsManager>
                </Element>
              ))}
            </Column>
            {stories.length > 1 && (
              <Column className="col-1 col-md-1 pt-4">{this.renderNavigationsStories()}</Column>
            )}
            {/* <Column className="col-12 col-md-12"> */}
            {/* <div className="code-import pl-0 pt-2 pb-2">
                <div className="col-5 text-truncate pl-0">
                  <Button className="pl-0" onClick={this.toogle} color="link">
                    <code className="text-monospace text-muted text-truncate">{importCode}</code>
                  </Button>
                </div>
                <NavbarCollapse isOpen={open}>
                  <pre>
                    <code className="text-monospace text-muted">{importCode}</code>
                  </pre>
                </NavbarCollapse>
              </div> */}
            {/* </Column> */}
          </Row>
        </div>
      </div>
    );
  }
}

DetailsComponent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  propsDescription: PropTypes.objectOf(PropTypes.any),
  linkGithub: PropTypes.string,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      summary: PropTypes.string,
      code: PropTypes.string,
      tabsActive: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  pagePushed: PropTypes.bool,
  showBack: PropTypes.bool
};

DetailsComponent.defaultProps = {
  name: 'Header component',
  description: '',
  propsDescription: null,
  linkGithub: 'Link',
  stories: [],
  pagePushed: false,
  showBack: true
};

export default DetailsComponent;

/* eslint-disable react/prop-types */

const React = require('react')
// const { MarkdownBlock } = require('../../core/CompLibrary.js')
const siteConfig = require(process.cwd() + '/siteConfig.js')

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self',
}

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">
        <div className="inner">{props.children}</div>
      </div>
    </div>
  </div>
)

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
)

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
)

const Index = props => (
  <SplashContainer>
    <PromoSection>
      <ProjectTitle />
      {/* <MarkdownBlock>{siteConfig.readme}</MarkdownBlock> */}
    </PromoSection>
    <Button href="./docs/intro.html">Try It Out</Button>
  </SplashContainer>
)

module.exports = Index

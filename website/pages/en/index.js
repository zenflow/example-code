/* eslint-disable react/prop-types */

const React = require('react')
const { MarkdownBlock } = require('../../core/CompLibrary.js')
const siteConfig = require(process.cwd() + '/siteConfig.js')

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">
        <div className="inner">{props.children}</div>
      </div>
    </div>
  </div>
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
      <MarkdownBlock>{siteConfig.readme}</MarkdownBlock>
    </PromoSection>
  </SplashContainer>
)

module.exports = Index

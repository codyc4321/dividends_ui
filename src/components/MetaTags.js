import { Helmet } from "react-helmet";


const MetaTags = (props) => {

  return (
    <Helmet>
      <meta name="description" content={props.description}/>
      <meta name="hostname" content="www.stockhistoryscreener.com"/>
      <meta name="expected-hostname" content="www.stockhistoryscreener.com"/>
    </Helmet>

  )
}

export default MetaTags;


// <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">
// <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
// <meta name="theme-color" content="#1e2327">
// <meta name="color-scheme" content="light dark" />

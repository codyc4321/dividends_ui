import {useLayoutEffect} from 'react';

import Citation from '../shared/Citation';
import MyLink from '../shared/MyLink';


const allArticlesData = [
  {
    path: "/articles/why-invest",
    title: "Why Invest?"
  },
  {
    path: "/articles/investing-basics",
    title: "Basics of Investing"
  },
  {
    path: "/articles/dividend-aristocrats",
    title: "Dividend Kings and Aristocrats"
  },
  {
    path: "/articles/dividends-vs-growth",
    title: "Dividend Stocks vs. Growth Stocks"
  },
  {
    path: "/articles/taxes",
    title: "Taxes for Dividends and Capital Gains"
  },
  {
    path: "/articles/types-of-bonds",
    title: "Types of Bonds"
  },

]

const Article = (props) => {

  // https://stackoverflow.com/questions/45583358/open-link-at-top-of-page
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  document.title = props.data.title;

  const sources = props.data.sources.map((source) => {
    return (
      <Citation
        key={source.url}
        title={source.title}
        url={source.url} />
    )
  });

  let sources_header = null;
  if (props.data.sources.length > 0) {
    sources_header = (<h6>Sources</h6>);
  }

  let author_by_tag = null;
  if (props.data.author) {
    if (props.data.author.email) {
      author_by_tag = (<p>By <a href={"mailto:" + props.data.author.email}>{props.data.author.name}</a></p>)
    } else {
      author_by_tag = (<p>By {props.data.author.name}</p>)
    }
  }

  let title = props.data.title;

  let titleTag = null;
  if (title) {
    titleTag = (<h3>{props.data.title}</h3>)
  }



  const currentIndex = allArticlesData.findIndex((element) => title === element.title);
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  let previousArticleData = null;
  let previousLink = null;

  let nextArticleData = null;
  let nextLink = null;

  if (currentIndex !== -1) {
    if (previousIndex >= 0) {
      previousArticleData = allArticlesData[previousIndex];
    }

    if (previousArticleData) {
      previousLink = (
        <MyLink path={previousArticleData.path} text={"Previous: " + previousArticleData.title} />
      )
    }

    if (nextIndex < allArticlesData.length) {
      nextArticleData = allArticlesData[nextIndex];
    }

    if (nextArticleData) {
      nextLink = (
        <MyLink path={nextArticleData.path} text={"Next: " + nextArticleData.title} style={{float: 'right'}}/>
      )
    }
  }


  return (
    <div className="ui segment">
      {titleTag}
      {author_by_tag}
      <br/>
      {props.data.body}
      <br/>
      <div style={{width: '50%', margin: 'auto'}}>{previousLink} {nextLink}</div>
      {sources_header}
      {sources}
    </div>
  )
}


export default Article;

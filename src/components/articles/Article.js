import React from 'react';

import Citation from '../shared/Citation';


const Article = (props) => {

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

  let title = null;
  if (props.data.title) {
    title = (<h3>{props.data.title}</h3>)
  }

  return (
    <div className="ui segment">
      {title}
      {author_by_tag}
      <br/>
      {props.data.body}
      <br/>
      {sources_header}
      {sources}
    </div>
  )
}


export default Article;

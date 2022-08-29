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

  return (
    <div className="ui segment">
      {props.data.body}
      <br/>
      {sources_header}
      {sources}
    </div>
  )
}


export default Article;

import React from 'react';

import Citation from '../shared/Citation';


const Article = (props) => {

  const sources = props.data.sources.map((source) => {
    return (
      <Citation
        title={source.title}
        url={source.url} />
    )
  });

  return (
    <div className="ui segment">
      {props.data.body}
      <br/>
      <h6>Sources</h6>
      {sources}
    </div>
  )
}


export default Article;

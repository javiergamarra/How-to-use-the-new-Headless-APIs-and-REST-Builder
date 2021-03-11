import React, {useRef, useState} from 'react';
import {useParams} from 'react-router-dom';

import {gql, useQuery} from '@apollo/client'

const query = gql`
query documents {
    documents(siteKey: "Guest") {
      items {
        creator {
          id
          name
        }
        contentUrl
        description
        title
      }
    }
  }`


export default () => {

  const {creatorId} = useParams();
  console.log(creatorId);

  const [playing, setPlaying] = useState(false);

  const onVideoPress = (event) => {
    if (playing) {
      event.target.pause();
    } else {
      event.target.play();
    }
    setPlaying(!playing);
  };

  const {loading, data} = useQuery(query);

  console.log(data)

  return (
    <>
      <div className="video">
        {
        data && data.documents && data.documents.items.map(document => (
          <video key={document.contentUrl} style={{width: "33%"}} onClick={onVideoPress}
                 src={`http://localhost:8080/${document.contentUrl}`}/>
        ))
      }</div>
    </>
  )
}
import React, {useRef, useState} from 'react';
import {useParams} from 'react-router-dom';

import {gql, useQuery} from '@apollo/client'

const query = gql`
query assetLibraryDocuments($filter: String!) {
    assetLibraryDocuments(assetLibraryId: "MyAssetLibrary", filter: $filter) {
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

  const {loading, data} = useQuery(query, {
    variables: {
      filter: `creatorId eq ${creatorId}`
    }
  });

  console.log(data)

  return (
    <>
      <div className="video">
        {
          data && data.assetLibraryDocuments && data.assetLibraryDocuments.items.map(document => (
            <video key={document.contentUrl} style={{width: "33%"}} onClick={onVideoPress}
                   src={`http://localhost:8080/${document.contentUrl}`}/>
          ))
        }</div>
    </>
  )
}
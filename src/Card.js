

import React, { useState } from 'react'

const Card = (props) => {


  let [likes, setVotes] = useState(0);
  const like = () => {
    console.log('like clicked')
    setVotes(likes++)
  }
  const dislike = () => {
    console.log('dislike clicked')
    if (likes === 0) {
      return
    }
    setVotes(likes--)
  }

  let [showThing, setShowThing] = useState(false);

  let commentSection = ['HAHAHA THATS SO FUNNY', 'YES IM TOTALLY IN', 'NO NEVER!', 'Are you serious!', 'No Thanks!', 'Lets do it!']



  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  return (
    <div className="container">
      <div className="bio">
        <h3 className="user-name">{props.name || 'No name prop given'}</h3>
        <p className="facebook">{props.userid}</p>
        <p>{props.about || "no about prop given"}</p>
        <p>likes:{likes}</p>
        <button onClick={like}>like</button>
        <button onClick={dislike}>dislike</button>
        <div></div>
        {showThing && <p>{commentSection[randomIntFromInterval(0, 5)]}</p>}
        <button
          onClick={() => {
            setShowThing(!showThing)
          }}
        >
          {showThing ? 'hide comments' : 'show Comments'}
        </button>
      </div>
    </div >

  )
}



export default Card

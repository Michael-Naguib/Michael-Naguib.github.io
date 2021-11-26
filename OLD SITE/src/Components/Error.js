import React from 'react'

function Error() {
  return (
    <div id={'ErrorPage'}>
      <h1>An Error Has Occured</h1>
      <img src={process.env.PUBLIC_URL + '/ErrorMeme.jpg'} />
    </div>
  )
}

export default Error

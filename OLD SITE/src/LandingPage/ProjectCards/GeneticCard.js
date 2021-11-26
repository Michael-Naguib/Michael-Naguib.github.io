import Card from 'react-bootstrap/Card'
import MathJax from 'react-mathjax'
import CardColumns from 'react-bootstrap/CardColumns'
import React from 'react'
import { getDisplayMode } from '../../Util/util'

export default function GeneticCard(props) {
  const dark = getDisplayMode() == 'dark'
  const fontColor = dark ? 'white' : 'black'
  return (
    <Card className={dark ? 'bg-dark text-white' : 'bg-light text-black'} text={fontColor}>
      <a href="https://github.com/Michael-Naguib/Genetic-Algorithm" className={'ProjectsLink'}>
        <video
          className={'card-img-top'}
          src={process.env.PUBLIC_URL + '/exampleGA.mp4'}
          autoPlay="true"
          loop
          muted
        ></video>
        <Card.Body bg={dark ? 'Dark' : 'Light'}>
          <Card.Title>Genetic Algorithm (on Words)</Card.Title>
          <Card.Text>
            <MathJax.Provider>
              Implemented a Genetic based approach for calculating a target phrase...
            </MathJax.Provider>
          </Card.Text>
        </Card.Body>
        <Card.Text>
          <small className="text-muted">Last updated May 2020 </small>
        </Card.Text>
      </a>
    </Card>
  )
}

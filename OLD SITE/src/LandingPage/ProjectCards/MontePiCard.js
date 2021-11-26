import Card from 'react-bootstrap/Card'
import MathJax from 'react-mathjax'
import CardColumns from 'react-bootstrap/CardColumns'
import React from 'react'
import { getDisplayMode } from '../../Util/util'

export default function MontePiCard(props) {
  const dark = getDisplayMode() == 'dark'
  const fontColor = dark ? 'white' : 'black'
  return (
    <Card className={dark ? 'bg-dark text-white' : 'bg-light text-black'} text={fontColor}>
      <a href="https://github.com/Michael-Naguib/MonteCarloPi" className={'ProjectsLink'}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/PiEqn.png'} />
        <Card.Body bg={dark ? 'Dark' : 'Light'}>
          <Card.Title>Monte Carlo Pi Simulation</Card.Title>
          <Card.Text>
            <MathJax.Provider>
              Derived Pi as a result of a monte carlo simulation computed in N-Dimensions so as to
              produce and estimate of Pi by running repeated simulations and observing convergence
              of approximations.
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

import { Container, Jumbotron } from 'react-bootstrap'
import React from 'react'
import Navigation from '../../Components/Navigation'
import Row from 'react-bootstrap/Row'
import { getDisplayMode } from '../../Util/util'
import Col from 'react-bootstrap/Col'
import MathJax from 'react-mathjax'

function Article1(props) {
  const dark = getDisplayMode() == 'dark'
  const fontColor = dark ? 'white' : 'black'
  const mainImage =
    'https://images.unsplash.com/photo-1513012372342-f0031630af0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80)'
  return (
    <div
      style={{
        marginTop: '72px',
        color: fontColor,
        backgroundColor: dark ? '#040719' : 'white',
        minHeight: '100vh',
      }}
    >
      <Navigation />
      <MathJax.Provider>
        <Jumbotron
          fluid
          style={{
            backgroundImage: "url('" + mainImage + "'",
            overflow: 'hidden',
            backgroundSize: 'cover',
            paddingLeft: '5vw',
            paddingRight: '5vw',
          }}
        >
          <Container
            style={{
              backgroundColor: 'rgba(255, 255, 255, .45)',
              backdropFilter: ' blur(5px)',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <h1>Fluid Monte carlo pi</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of its parent.
            </p>
            <p className="text-muted">By Michael Naguib | 10 min Read</p>
          </Container>
        </Jumbotron>
        <Container fluid style={{ paddingLeft: '20%', paddingRight: '20%' }}>
          <Row>
            <Col md={12}>
              <h2>Overview</h2>
            </Col>
            <Col md={12}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus leo ante, nec
                porta magna facilisis vitae. Etiam ultrices fermentum purus vitae semper. Maecenas
                sit amet enim luctus, ultrices erat vel, dapibus lectus. Aenean tristique erat non
                quam feugiat, a ullamcorper massa aliquet. Fusce cursus viverra nibh quis placerat.
                Phasellus eleifend eget nisi et elementum. Etiam porttitor diam ut augue tincidunt
                lacinia. Aliquam porttitor, enim eget fermentum consequat, augue nisi congue lacus,
                quis volutpat ex mi ultricies dolor. Quisque fermentum erat a consectetur pretium.
                Ut porta finibus urna, ut consequat mauris mollis ac. Mauris eu posuere risus.
              </p>
              <MathJax.Node
                formula={`\\sigma = \\sqrt{ \\frac{1}{N} \\sum_{i=1}^N (x_i -\\mu)^2} `}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus leo ante, nec
                porta magna facilisis vitae. Etiam ultrices fermentum purus vitae semper. Maecenas
                sit amet enim luctus, ultrices erat vel, dapibus lectus. Aenean tristique erat non
                quam feugiat, a ullamcorper massa aliquet. Fusce cursus viverra nibh quis placerat.
                Phasellus eleifend eget nisi et elementum. Etiam porttitor diam ut augue tincidunt
                lacinia. Aliquam porttitor, enim eget fermentum consequat, augue nisi congue lacus,
                quis volutpat ex mi ultricies dolor. Quisque fermentum erat a consectetur pretium.
                Ut porta finibus urna, ut consequat mauris mollis ac. Mauris eu posuere risus.
              </p>
              <MathJax.Node
                formula={`(\\nabla_X Y)^k = X^i (\\nabla_i Y)^k =
           X^i \\left( \\frac{\\partial Y^k}{\\partial x^i} + \\Gamma_{im}^k Y^m \\right) `}
              />
            </Col>
            <Col md={12}>
              <h2>Section 1.1</h2>
            </Col>
            <Col md={12}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus leo ante, nec
                porta magna facilisis vitae. Etiam ultrices fermentum purus vitae semper. Maecenas
                sit amet enim luctus, ultrices erat vel, dapibus lectus. Aenean tristique erat non
                quam feugiat, a ullamcorper massa aliquet. Fusce cursus viverra nibh quis placerat.
                Phasellus eleifend eget nisi et elementum. Etiam porttitor diam ut augue tincidunt
                lacinia. Aliquam porttitor, enim eget fermentum consequat, augue nisi congue lacus,
                quis volutpat ex mi ultricies dolor. Quisque fermentum erat a consectetur pretium.
                Ut porta finibus urna, ut consequat mauris mollis ac. Mauris eu posuere risus.
              </p>
            </Col>
          </Row>
        </Container>
      </MathJax.Provider>
    </div>
  )
}

const article1Data = {
  title: 'Chaotic Fractals',
  date: new Date().toString(),
  caption: 'Random functional composition generates fractal structures',
  keywords: 'Math, Chaos, Fractals, iterated, IFS, non-deterministic,composition',
  pLink: '/Articles/ChaoticFractals',
  imgSrc:
    'https://images.unsplash.com/photo-1608561028990-47a3a8538ba6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  component: Article1,
}

export default article1Data

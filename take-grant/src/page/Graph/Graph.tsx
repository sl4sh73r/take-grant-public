import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { addNodes, selectNodesList } from "../../sliseNode/nodeSlise"
import { Link } from "react-router-dom"

import  GraphModule from "../../Module/componentGraph"

import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../../scss/Graph.scss"

interface InodeConections { [key: string]: string; }


function Graph() {
  const nodesList = useAppSelector(selectNodesList)
  const [nodeConections, setConections] = useState<InodeConections>({})



  function handleSetConectionsList(e: any, key: string) {
    setConections({
      ...nodeConections,
      [key]: e.target.value

    });
    console.log(key)
  }


  const matrixGeneration = (
    <>
      <tr>
        <th>#</th>
        {nodesList.map((cell, colIndex) => (
          <th key={colIndex + cell.node}>{cell.node}</th>
        ))}
      </tr>
      {nodesList.map((nodeRow, rowIndex) => (
        <tr key={nodeRow.node}>
          <th>{nodeRow.node}</th>
          {nodesList.map((cell, colIndex) => (
            <td key={nodeRow.node + cell.node + colIndex.toString()}>
              <Form.Control className="tableInput" type="text" value={nodeConections[nodeRow.node +" -> "+ cell.node]} onChange={e => { handleSetConectionsList(e, nodeRow.node + " -> " + cell.node) }} />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
  const mass =
    <>
      {Object.keys(nodeConections).map((key, i) => (
        <div key={i}>{i + " " + key + " " + nodeConections[key]}</div>
      ))}
    </>
  return (
    <div className="App">
      <header className="App-header">
      <img src="image--122hYJMf-transformed.png" />
        <Container className="buttons_graph">
          <Row>
            <Col className="blockGraphModule">
            
              <GraphModule />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table className="myTable">
                <tbody>{matrixGeneration}</tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Container className="control_buttons">
                <Row>
                  <Col>
                    <Button size="lg">Redraw</Button>
                  </Col>
                  <Col>
                    <Button variant="success" size="lg">
                      Undo
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="success" size="lg">
                      Export
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="success" size="lg">
                      Save Image
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="success" size="lg">
                      Save Matrix
                    </Button>
                  </Col>
                  <Col>
                    <Link to={"/"}>
                      <Button
                        className="button_special"
                        variant="danger"
                        size="lg"
                      >
                        Exit
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <div>
                данные nodeConections
                {mass}
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default Graph

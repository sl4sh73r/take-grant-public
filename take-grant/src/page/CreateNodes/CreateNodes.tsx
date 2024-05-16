import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { addNodes, selectNodesList } from "../../sliseNode/nodeSlise"
import { Link } from "react-router-dom"

import "../../scss/CreateNodes.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export function CreateNodes() {
  const nodesList = useAppSelector(selectNodesList)
  const dispatch = useAppDispatch()
  const [nodesName, setNameNodes] = useState("")
  const [nodeType, setTypeNodes] = useState("Subject")
  const [exeptionNode, setExeptionNode] = useState(<div className="exeptionBlock"> норм</div>)


  
  function handleAddNodes() {
    debugger
    if(nodesList.some(elm => elm.node === nodesName)){
      const jsxExeption = <div className="exeptionBlock"><span className="exeption">такая нода уже есть!</span></div>
      setExeptionNode(jsxExeption) 
    } else {
      const jsxExeption = <div className="exeptionBlock correct"><span className="correct">Ok</span></div>
      setExeptionNode(jsxExeption) 
      dispatch(addNodes({ node: nodesName, type: nodeType }))
    }
  }

  
  const listItems = nodesList.map((nodes, index) => (
    <tr key={nodes.node.toString() + index.toString()}>
      <th>{(index + 1).toString()}</th>
      <th>{nodes.node}</th>
      <th>{nodes.type}</th>
    </tr>
  ))
  return (
    <div className="App">
      <header className="App-header">
        <img src="image--122hYJMf-transformed.png" />
        <Container>
          <Row>
            <Col className="myTable">
              <p>Node List</p>
              <>
              {exeptionNode}
              </>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                  </tr>
                  {listItems}
                </thead>
              </Table>
            </Col>
            <Col>
              <Container className="actions">
                <Row>
                  <p>Node Actions</p>
                </Row>
                <Row>
                  <Col>Node Name:</Col>
                  <Col>
                    <Form.Control
                      className="inputs"
                      type="text"
                      value={nodesName}
                      onChange={(e) => setNameNodes(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Node Type:</p>
                  </Col>
                  <Col>
                    <Form.Select
                      className="inputs"
                      aria-label="Default select example"
                      value={nodeType}
                      onChange={(e) => setTypeNodes(e.target.value)}
                    >
                      <option value="Subject">Subject</option>
                      <option value="Object">Object</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button size="lg">
                      Remove
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="lg"
                      onClick={() =>
                        handleAddNodes()
                      }
                    >
                      Add
                    </Button>
                  </Col>
                  <br />
                  <br />
                </Row>
                <Row>
                  <Col>
                    <Link to={".."}>
                      <Button size="lg">
                        Exit
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <Link to={"../Graph"}>
                      <Button size="lg">
                        Next
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

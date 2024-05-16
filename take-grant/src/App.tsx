import "./scss/App.scss"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src="image--122hYJMf-transformed.png" />
        <div className="text-block">
          <h1>"Take-Grant" model visualizer</h1>
          <p>
            Программа анализа, визуализации и модифицирования модели дискретного
            разграничения доступа - Take-Grant
          </p>
        </div>
        <Link to={"CreateNodes"}>
          <Button variant="success" size="lg">
            Создать
          </Button>
        </Link>
      </header>
    </div>
  )
}

export default App

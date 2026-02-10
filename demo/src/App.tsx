import React from "react"
import "./App.css"
import { BasicGrid } from "./examples/BasicGrid"
import { ResponsiveGrid } from "./examples/ResponsiveGrid"
import { OffsetExample } from "./examples/OffsetExample"
import { SpacingExample } from "./examples/SpacingExample"
import { FlexProperties } from "./examples/FlexProperties"
import { CustomColumns } from "./examples/CustomColumns"
import { ComplexLayout } from "./examples/ComplexLayout"
import { EdgeCases } from "./examples/EdgeCases"

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>React Simple Grid</h1>
        <p>
          A lightweight, responsive grid component inspired by Material UI's
          Grid
        </p>
      </header>

      <main className="main">
        <BasicGrid />
        <ResponsiveGrid />
        <OffsetExample />
        <SpacingExample />
        <FlexProperties />
        <CustomColumns />
        <ComplexLayout />
        <EdgeCases />
      </main>

      <footer className="footer">
        <p>
          <a href="https://github.com/kflamsted/react-simple-grid">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App

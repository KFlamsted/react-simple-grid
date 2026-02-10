import React from "react"
import { Grid } from "../../../src/Grid"

export const FlexProperties: React.FC = () => {
  return (
    <section className="example">
      <h2>5. Flex Properties</h2>

      <h3>Justify Content: Space Between</h3>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid size={3}>
          <div className="demo-box">A</div>
        </Grid>
        <Grid size={3}>
          <div className="demo-box">B</div>
        </Grid>
        <Grid size={3}>
          <div className="demo-box">C</div>
        </Grid>
      </Grid>

      <h3>Align Items: Center</h3>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ minHeight: "120px", background: "#f5f5f5" }}
      >
        <Grid size={4}>
          <div className="demo-box" style={{ height: "40px" }}>
            Tall
          </div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box" style={{ height: "80px" }}>
            Taller
          </div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box" style={{ height: "40px" }}>
            Tall
          </div>
        </Grid>
      </Grid>

      <h3>Direction: Column</h3>
      <Grid container direction="column" spacing={2}>
        <Grid>
          <div className="demo-box">Vertical 1</div>
        </Grid>
        <Grid>
          <div className="demo-box">Vertical 2</div>
        </Grid>
      </Grid>
    </section>
  )
}

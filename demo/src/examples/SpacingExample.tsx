import React from "react"
import { Grid } from "../../../src/Grid"

export const SpacingExample: React.FC = () => {
  return (
    <section className="example">
      <h2>4. Spacing Variations</h2>

      <h3>Uniform Spacing (spacing=4)</h3>
      <Grid container spacing={4}>
        <Grid size={4}>
          <div className="demo-box">A</div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box">B</div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box">C</div>
        </Grid>
      </Grid>

      <h3>Row Spacing Only (rowSpacing=4)</h3>
      <Grid container rowSpacing={4}>
        <Grid size={4}>
          <div className="demo-box">A</div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box">B</div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box">C</div>
        </Grid>
      </Grid>

      <h3>Column Spacing Only (columnSpacing=4)</h3>
      <Grid container columnSpacing={4}>
        <Grid size={4}>
          <div className="demo-box">A</div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box">B</div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box">C</div>
        </Grid>
      </Grid>
    </section>
  )
}

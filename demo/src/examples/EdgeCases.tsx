import React from "react"
import { Grid } from "../../../src/Grid"

export const EdgeCases: React.FC = () => {
  return (
    <section className="example">
      <h2>8. Edge Cases</h2>

      <h3>Overflow Wrapping</h3>
      <p>More items than columns - items will wrap to new line.</p>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Grid key={num} size={3}>
            <div className="demo-box">{num}</div>
          </Grid>
        ))}
      </Grid>

      <h3>Auto Width (no size prop)</h3>
      <p>Items without a size prop take up remaining space.</p>
      <Grid container spacing={2}>
        <Grid size={4}>
          <div className="demo-box">Fixed 4</div>
        </Grid>
        <Grid>
          <div className="demo-box" style={{ background: "#ffebee" }}>
            Auto
          </div>
        </Grid>
        <Grid size={3}>
          <div className="demo-box">Fixed 3</div>
        </Grid>
      </Grid>

      <h3>Zero Spacing</h3>
      <p>No gap between items (spacing=0).</p>
      <Grid container spacing={0}>
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

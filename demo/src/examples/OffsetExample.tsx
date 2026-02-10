import React from "react"
import { Grid } from "../../../src/Grid"

export const OffsetExample: React.FC = () => {
  return (
    <section className="example">
      <h2>3. Offset Example</h2>
      <p>
        Using offset to push columns to the right. The center column is offset
        by 3 units.
      </p>

      <Grid container spacing={2}>
        <Grid size={3}>
          <div className="demo-box">First (3/12)</div>
        </Grid>
        <Grid size={3} offset={3}>
          <div className="demo-box">Offset (3/12 + offset 3)</div>
        </Grid>
      </Grid>

      <div style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid size={4} offset={4}>
            <div className="demo-box">Centered (4/12 + offset 4)</div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

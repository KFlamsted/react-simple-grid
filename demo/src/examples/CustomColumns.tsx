import React from "react"
import { Grid } from "../../../src/Grid"

export const CustomColumns: React.FC = () => {
  return (
    <section className="example">
      <h2>6. Custom Columns (16-column grid)</h2>
      <p>
        Using columns prop to create a 16-column grid system instead of the
        default 12.
      </p>

      <Grid container columns={16} spacing={2}>
        <Grid size={4}>
          <div className="demo-box">4/16 (25%)</div>
        </Grid>
        <Grid size={8}>
          <div className="demo-box">8/16 (50%)</div>
        </Grid>
        <Grid size={4}>
          <div className="demo-box">4/16 (25%)</div>
        </Grid>
      </Grid>

      <div style={{ marginTop: "20px" }}>
        <Grid container columns={16} spacing={2}>
          <Grid size={2}>
            <div className="demo-box">2</div>
          </Grid>
          <Grid size={2}>
            <div className="demo-box">2</div>
          </Grid>
          <Grid size={2}>
            <div className="demo-box">2</div>
          </Grid>
          <Grid size={2}>
            <div className="demo-box">2</div>
          </Grid>
          <Grid size={2}>
            <div className="demo-box">2</div>
          </Grid>
          <Grid size={2}>
            <div className="demo-box">2</div>
          </Grid>
          <Grid size={2}>
            <div className="demo-box">2</div>
          </Grid>
          <Grid size={2}>
            <div className="demo-box">2</div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

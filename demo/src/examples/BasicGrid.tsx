import React from "react"
import { Grid } from "../../../src/Grid"

export const BasicGrid: React.FC = () => {
  return (
    <section className="example">
      <h2>1. Basic Grid</h2>
      <p>Simple two-column layout with equal widths.</p>

      <Grid container spacing={2}>
        <Grid size={6}>
          <div className="demo-box">Left Column (6/12)</div>
        </Grid>
        <Grid size={6}>
          <div className="demo-box">Right Column (6/12)</div>
        </Grid>
      </Grid>
    </section>
  )
}

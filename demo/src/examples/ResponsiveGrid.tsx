import React from "react"
import { Grid } from "../../../src/Grid"

export const ResponsiveGrid: React.FC = () => {
  return (
    <section className="example">
      <h2>2. Responsive Grid</h2>
      <p>
        Cards adapt their width at different breakpoints. Try resizing your
        browser window!
      </p>
      <p>
        <strong>xs:</strong> Full width (12/12) |<strong> sm:</strong> Half
        width (6/12) |<strong> md:</strong> Quarter width (3/12)
      </p>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <div className="demo-box">Card 1</div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <div className="demo-box">Card 2</div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <div className="demo-box">Card 3</div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <div className="demo-box">Card 4</div>
        </Grid>
      </Grid>
    </section>
  )
}

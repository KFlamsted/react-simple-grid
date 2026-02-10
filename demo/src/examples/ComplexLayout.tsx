import React from "react"
import { Grid } from "../../../src/Grid"

export const ComplexLayout: React.FC = () => {
  return (
    <section className="example">
      <h2>7. Complex Layout (Nested Grids)</h2>
      <p>
        Combining multiple features: responsive sizing, offset, and nested
        containers.
      </p>

      <Grid container spacing={2}>
        {/* Header */}
        <Grid size={12}>
          <div
            className="demo-box"
            style={{ background: "#3f51b5", color: "white" }}
          >
            Header (Full Width)
          </div>
        </Grid>

        {/* Sidebar */}
        <Grid size={{ xs: 12, md: 3 }}>
          <div className="demo-box" style={{ minHeight: "200px" }}>
            Sidebar (3/12 on desktop, full on mobile)
          </div>
        </Grid>

        {/* Main Content */}
        <Grid size={{ xs: 12, md: 9 }}>
          <div className="demo-box" style={{ minHeight: "200px" }}>
            <h4>Main Content Area</h4>

            {/* Nested Grid */}
            <Grid container spacing={2}>
              <Grid size={6}>
                <div className="demo-box" style={{ background: "#e3f2fd" }}>
                  Nested Left
                </div>
              </Grid>
              <Grid size={6}>
                <div className="demo-box" style={{ background: "#e3f2fd" }}>
                  Nested Right
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        {/* Footer */}
        <Grid size={12}>
          <div
            className="demo-box"
            style={{ background: "#757575", color: "white" }}
          >
            Footer (Full Width)
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

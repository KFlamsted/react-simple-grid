# Examples

This document provides extended code examples for common use cases with the React Simple Grid component. For a live demo, see the [demo application](./demo/src/examples/).

## Table of Contents

- [Basic Grid Layout](#basic-grid-layout)
- [Responsive Design](#responsive-design)
- [Spacing Patterns](#spacing-patterns)
- [Offset and Positioning](#offset-and-positioning)
- [Nested Grids](#nested-grids)
- [Alignment](#alignment)

---

## Basic Grid Layout

A simple 12-column grid layout with equal-sized items.

```tsx
import { Grid } from "@kflamsted/react-simple-grid"

function BasicGrid() {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <div>First Column (4/12)</div>
      </Grid>
      <Grid size={4}>
        <div>Second Column (4/12)</div>
      </Grid>
      <Grid size={4}>
        <div>Third Column (4/12)</div>
      </Grid>
    </Grid>
  )
}
```

[See demo implementation](./demo/src/examples/BasicGrid.tsx)

---

## Responsive Design

Create layouts that adapt to different screen sizes using breakpoint-specific sizes.

```tsx
import { Grid } from "@kflamsted/react-simple-grid"

function ResponsiveLayout() {
  return (
    <Grid container spacing={2}>
      {/* Full width on mobile, half width on tablets and larger */}
      <Grid size={{ xs: 12, md: 6 }}>
        <div>Responsive Item 1</div>
      </Grid>

      {/* Full width on mobile, quarter width on tablets and larger */}
      <Grid size={{ xs: 12, md: 3 }}>
        <div>Responsive Item 2</div>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <div>Responsive Item 3</div>
      </Grid>
    </Grid>
  )
}
```

### Common Responsive Patterns

**Two-Column Layout:**

```tsx
<Grid size={{ xs: 12, md: 6 }}>
```

**Three-Column Layout:**

```tsx
<Grid size={{ xs: 12, md: 4 }}>
```

**Sidebar + Main Content:**

```tsx
// Sidebar: full width mobile, 1/3 desktop
<Grid size={{ xs: 12, md: 4 }}>

// Main Content: full width mobile, 2/3 desktop
<Grid size={{ xs: 12, md: 8 }}>
```

[See demo implementation](./demo/src/examples/ResponsiveGrid.tsx)

---

## Spacing Patterns

Control the space between grid items with different spacing strategies.

### Unified Spacing

Apply the same spacing to both row and column gutters:

```tsx
<Grid container spacing={2}>
  {/* All items have 16px (2 × 8px) gap */}
</Grid>
```

### Separate Row and Column Spacing

Control horizontal and vertical spacing independently:

```tsx
<Grid container rowSpacing={2} columnSpacing={4}>
  {/* 16px vertical gap, 32px horizontal gap */}
</Grid>
```

### Responsive Spacing

Change spacing based on screen size:

```tsx
<Grid container spacing={{ xs: 1, md: 2, lg: 3 }}>
  {/* Small gap on mobile, medium on tablet, large on desktop */}
</Grid>
```

**Spacing Reference:**

- `spacing={1}` → 8px
- `spacing={2}` → 16px
- `spacing={3}` → 24px
- `spacing={4}` → 32px

[See demo implementation](./demo/src/examples/SpacingExample.tsx)

---

## Offset and Positioning

Push grid items to the right with offsets or auto positioning.

### Fixed Offset

```tsx
<Grid container spacing={2}>
  {/* Item starts at column 4 (after 3 empty columns) */}
  <Grid size={6} offset={3}>
    <div>Centered Item</div>
  </Grid>
</Grid>
```

### Auto Offset

Push items to the right edge with `auto`:

```tsx
<Grid container spacing={2}>
  <Grid size={4}>
    <div>Left Item</div>
  </Grid>
  <Grid size={4} offset="auto">
    <div>Pushed to Right</div>
  </Grid>
</Grid>
```

### Responsive Offset

Change offset based on breakpoints:

```tsx
<Grid size={6} offset={{ xs: 0, md: 3 }}>
  {/* No offset on mobile, 3 columns on desktop */}
</Grid>
```

[See demo implementation](./demo/src/examples/OffsetExample.tsx)

---

## Nested Grids

Create complex layouts by nesting grids within grid items.

```tsx
import { Grid } from "@kflamsted/react-simple-grid"

function NestedGrids() {
  return (
    <Grid container spacing={2}>
      {/* Main container */}
      <Grid size={8}>
        {/* Nested grid inside this item */}
        <Grid container spacing={1}>
          <Grid size={6}>
            <div>Nested Item 1</div>
          </Grid>
          <Grid size={6}>
            <div>Nested Item 2</div>
          </Grid>
        </Grid>
      </Grid>

      {/* Sidebar */}
      <Grid size={4}>
        <div>Sidebar</div>
      </Grid>
    </Grid>
  )
}
```

**Tips for nested grids:**

- Each container creates a new 12-column grid context
- Spacing is independent in each container
- Combine with responsive sizes for adaptive nested layouts

---

## Alignment

Align items within grid containers using flexbox properties.

### Horizontal Alignment (justifyContent)

```tsx
<Grid container spacing={2} justifyContent="center">
  <Grid size={4}>
    <div>Centered</div>
  </Grid>
</Grid>
```

Options: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`

### Vertical Alignment (alignItems)

```tsx
<Grid container spacing={2} alignItems="center" style={{ height: 200 }}>
  <Grid size={4}>
    <div>Vertically Centered</div>
  </Grid>
</Grid>
```

Options: `flex-start`, `center`, `flex-end`, `stretch`, `baseline`

### Combined Example

```tsx
<Grid
  container
  spacing={2}
  justifyContent="space-between"
  alignItems="center"
  style={{ height: 300 }}
>
  <Grid size={3}>
    <div>Left Item</div>
  </Grid>
  <Grid size={3}>
    <div>Right Item</div>
  </Grid>
</Grid>
```

[See demo implementation](./demo/src/examples/FlexProperties.tsx)

---

## Demo Application

Explore all examples interactively:

```bash
cd demo
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

### Available Demo Files

| Demo             | Description                     | File                                                         |
| ---------------- | ------------------------------- | ------------------------------------------------------------ |
| Basic Grid       | Simple 12-column layouts        | [BasicGrid.tsx](./demo/src/examples/BasicGrid.tsx)           |
| Responsive Grid  | Breakpoint-specific sizing      | [ResponsiveGrid.tsx](./demo/src/examples/ResponsiveGrid.tsx) |
| Spacing Examples | Row and column spacing patterns | [SpacingExample.tsx](./demo/src/examples/SpacingExample.tsx) |
| Offset Examples  | Offset positioning              | [OffsetExample.tsx](./demo/src/examples/OffsetExample.tsx)   |
| Flex Properties  | Alignment and justification     | [FlexProperties.tsx](./demo/src/examples/FlexProperties.tsx) |
| Custom Columns   | Non-standard column counts      | [CustomColumns.tsx](./demo/src/examples/CustomColumns.tsx)   |
| Complex Layout   | Real-world layout examples      | [ComplexLayout.tsx](./demo/src/examples/ComplexLayout.tsx)   |
| Edge Cases       | Special scenarios               | [EdgeCases.tsx](./demo/src/examples/EdgeCases.tsx)           |

---

## Tips and Best Practices

1. **Always use `container` on the parent**: Only `<Grid container>` creates a grid context
2. **Mobile-first sizing**: Define xs (mobile) sizes, then override for larger screens
3. **Consistent spacing**: Use the same spacing values throughout your app
4. **Testing responsive layouts**: Use browser DevTools to test different screen sizes
5. **TypeScript**: Import types for autocomplete and type checking:
   ```tsx
   import { Grid, GridProps } from "@kflamsted/react-simple-grid"
   ```

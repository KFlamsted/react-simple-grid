# React Grid Novaz

A simple, lightweight React grid component inspired by Material UI's Grid. Uses CSS Flexbox for responsive layouts.

## Installation

```bash
npm install react-grid-novaz
```

## Usage

### Basic Grid Container

```tsx
import { Grid } from 'react-grid-novaz';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid size={8}>Content</Grid>
      <Grid size={4}>Content</Grid>
    </Grid>
  );
}
```

### Responsive Breakpoints

```tsx
<Grid size={{ xs: 12, md: 6 }}>Content</Grid>
```

### Spacing

```tsx
// Unified spacing
<Grid container spacing={2}>
  <Grid size={6}>Item 1</Grid>
  <Grid size={6}>Item 2</Grid>
</Grid>

// Separate row and column spacing
<Grid container rowSpacing={2} columnSpacing={3}>
  <Grid size={6}>Item 1</Grid>
  <Grid size={6}>Item 2</Grid>
</Grid>
```

### Offset

```tsx
<Grid size={6} offset={3}>Offset Content</Grid>
```

## Props

### Container Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `container` | `boolean` | `false` | If true, the component is a grid container |
| `spacing` | `number \| ResponsiveValue<number>` | - | Spacing between grid items (uses MUI spacing scale) |
| `rowSpacing` | `number \| ResponsiveValue<number>` | - | Row spacing between grid items |
| `columnSpacing` | `number \| ResponsiveValue<number>` | - | Column spacing between grid items |
| `columns` | `number \| ResponsiveValue<number>` | `12` | Number of columns in the grid |
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | `'row'` | Flex direction |
| `wrap` | `CSSProperties['flexWrap']` | `'wrap'` | Wrap behavior |

### Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| ResponsiveValue<number>` | - | Size of the grid item (1-12 columns) |
| `offset` | `number \| 'auto' \| ResponsiveValue<number \| 'auto'>` | - | Offset to push the item to the right |

## Breakpoints

| Breakpoint | Width |
|------------|-------|
| `xs` | 0px |
| `sm` | 600px |
| `md` | 960px |
| `lg` | 1280px |
| `xl` | 1920px |

## License

MIT
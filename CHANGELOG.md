# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-02-12

### Initial Release

#### Features

- **Responsive Grid Component**: 12-column grid system inspired by Material UI's Grid component
- **CSS Flexbox Layout**: Lightweight and efficient flexbox-based implementation
- **Five Breakpoints**: xs (0px), sm (600px), md (960px), lg (1280px), xl (1920px)
- **Responsive Values**: Support for breakpoint-specific sizing, spacing, and offset
- **Spacing Support**: Unified spacing or separate row/column spacing using MUI spacing scale (value × 8px)
- **Offset Support**: Push grid items to the right with numeric or 'auto' offset values
- **Nested Grids**: Support for container mode on grid items for complex layouts
- **Alignment Options**: Justify content and align items properties support
- **TypeScript Support**: Full type definitions exported for type safety

#### Added

- `Grid` component with container and item modes
- `GridContainerProps` interface for container configuration
- `GridItemProps` interface for item configuration
- CSS stylesheet with breakpoint-specific classes
- Type exports: `GridSize`, `GridOffset`, `GridSpacing`, `GridColumns`, `Breakpoint`
- Demo application with 8 example components showcasing all features

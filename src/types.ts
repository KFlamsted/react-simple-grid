/**
 * Breakpoint keys for responsive values
 */
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Default breakpoint values (matching MUI)
 */
export const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

/**
 * Responsive value type - can be a single value or an object with breakpoint-specific values
 */
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

/**
 * Grid item size type - number (1-12) or responsive object
 */
export type GridSize = number | Partial<Record<Breakpoint, number>>;

/**
 * Grid offset type - number or "auto"
 */
export type GridOffset =
  | number
  | "auto"
  | Partial<Record<Breakpoint, number | "auto">>;

/**
 * Spacing value type - number or responsive object
 */
export type GridSpacing = number | Partial<Record<Breakpoint, number>>;

/**
 * Grid columns type - number or responsive object
 */
export type GridColumns = number | Partial<Record<Breakpoint, number>>;

/**
 * Grid container props
 */
export interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the component is a grid container
   */
  container?: boolean;
  /**
   * Spacing between grid items (applies to both row and column)
   * Uses MUI spacing scale: value * 8px
   */
  spacing?: GridSpacing;
  /**
   * Row spacing between grid items
   * Uses MUI spacing scale: value * 8px
   */
  rowSpacing?: GridSpacing;
  /**
   * Column spacing between grid items
   * Uses MUI spacing scale: value * 8px
   */
  columnSpacing?: GridSpacing;
  /**
   * Number of columns in the grid (default: 12)
   */
  columns?: GridColumns;
  /**
   * Flex direction (default: 'row')
   */
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  /**
   * Justify content alignment
   */
  justifyContent?: React.CSSProperties["justifyContent"];
  /**
   * Align items alignment
   */
  alignItems?: React.CSSProperties["alignItems"];
  /**
   * Wrap behavior (default: 'wrap')
   */
  wrap?: React.CSSProperties["flexWrap"];
  /**
   * Children elements (Grid items)
   */
  children?: React.ReactNode;
}

/**
 * Grid item props
 */
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the grid item (1-12 columns)
   * Can be a single number or responsive object
   */
  size?: GridSize;
  /**
   * Offset to push the item to the right
   * Can be a number or "auto" or responsive object
   */
  offset?: GridOffset;
  /**
   * If true, the component is a grid container (for nested grids)
   */
  container?: boolean;
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

/**
 * Combined Grid props (container or item)
 */
export type GridProps = GridContainerProps | GridItemProps;

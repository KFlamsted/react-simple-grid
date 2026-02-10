import React from "react"
import "./styles.css"
import type {
  GridProps,
  Breakpoint,
  GridContainerProps,
  GridItemProps,
} from "./types"

/**
 * MUI-compatible spacing multiplier (8px per unit)
 */
const SPACING_MULTIPLIER = 8

/**
 * Get the effective value for a breakpoint
 * If the value is not an object, return it directly
 * If it's an object, get the value for the current breakpoint or the largest smaller breakpoint
 */
const getResponsiveValue = <T,>(
  value: T | Partial<Record<Breakpoint, T>>,
  breakpoint: Breakpoint,
): T | undefined => {
  if (typeof value !== "object" || value === null) {
    return value as T | undefined
  }

  // Get all breakpoints in order
  const breakpointOrder: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"]
  const currentIndex = breakpointOrder.indexOf(breakpoint)

  // Find the largest breakpoint that is <= current breakpoint
  for (let i = currentIndex; i >= 0; i--) {
    const breakpoint = breakpointOrder[i]
    const breakpointValue = (value as Partial<Record<Breakpoint, T>>)[
      breakpoint
    ]
    if (breakpointValue !== undefined) {
      return breakpointValue
    }
  }

  return undefined
}

/**
 * Get the current breakpoint based on window width
 */
const getCurrentBreakpoint = (width: number): Breakpoint => {
  if (width >= 1920) return "xl"
  if (width >= 1280) return "lg"
  if (width >= 960) return "md"
  if (width >= 600) return "sm"
  return "xs"
}

/**
 * Hook to detect current breakpoint based on window width
 */
const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint>("xs")

  React.useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return

    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint(window.innerWidth))
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return breakpoint
}

/**
 * Grid Component
 *
 * A responsive layout grid component that works like Material UI's Grid.
 * Uses CSS Flexbox for high flexibility.
 *
 * @example
 * // Container usage
 * <Grid container spacing={2}>
 *   <Grid size={8}>Content</Grid>
 *   <Grid size={4}>Content</Grid>
 * </Grid>
 *
 * @example
 * // Responsive usage
 * <Grid size={{ xs: 12, md: 6 }}>Content</Grid>
 */
export const Grid: React.FC<GridProps> = (props) => {
  const breakpoint = useBreakpoint()

  const {
    container = false,
    size,
    spacing,
    rowSpacing,
    columnSpacing,
    columns = 12,
    offset,
    direction = "row",
    justifyContent,
    alignItems,
    wrap = "wrap",
    children,
    className,
    style,
    ...restProps
  } = props as GridContainerProps & GridItemProps

  // Container component
  if (container) {
    const spacingValue: number =
      typeof spacing === "number" ? spacing : (spacing?.xs ?? 0)
    const rowSpacingValue: number =
      typeof rowSpacing === "number" ? rowSpacing : (rowSpacing?.xs ?? 0)
    const columnSpacingValue: number =
      typeof columnSpacing === "number"
        ? columnSpacing
        : (columnSpacing?.xs ?? 0)

    const containerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent,
      alignItems,
      gap:
        spacing !== undefined
          ? `${spacingValue * SPACING_MULTIPLIER}px`
          : undefined,
      rowGap:
        rowSpacing !== undefined
          ? `${rowSpacingValue * SPACING_MULTIPLIER}px`
          : undefined,
      columnGap:
        columnSpacing !== undefined
          ? `${columnSpacingValue * SPACING_MULTIPLIER}px`
          : undefined,
      width: "100%",
      boxSizing: "border-box",
      ...style,
    }

    return (
      <div
        className={`rg-container ${className || ""}`}
        style={containerStyle}
        {...restProps}
      >
        {children}
      </div>
    )
  }

  // Item component
  const sizeValue = getResponsiveValue(size, breakpoint)
  const offsetValue = getResponsiveValue(offset, breakpoint)

  // Calculate flex basis and max width based on size and columns
  const sizeNum = sizeValue as number | undefined
  const columnsNum = columns as number
  const flexBasis =
    sizeNum !== undefined ? `${(sizeNum / columnsNum) * 100}%` : "100%"
  const maxWidth =
    sizeNum !== undefined ? `${(sizeNum / columnsNum) * 100}%` : "100%"

  // Calculate margin-left for offset
  const marginLeft =
    offsetValue === "auto"
      ? "auto"
      : offsetValue !== undefined && typeof offsetValue === "number"
        ? `${((offsetValue as number) / columnsNum) * 100}%`
        : undefined

  const itemStyle: React.CSSProperties = {
    flexBasis,
    maxWidth,
    flexGrow: 0,
    flexShrink: 0,
    marginLeft: marginLeft,
    boxSizing: "border-box",
    ...style,
  }

  return (
    <div
      className={`rg-item ${className || ""}`}
      style={itemStyle}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Grid

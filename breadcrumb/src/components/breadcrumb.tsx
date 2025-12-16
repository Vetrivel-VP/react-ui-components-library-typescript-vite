import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Root breadcrumb navigation wrapper
 */
const Breadcrumb = (props: React.ComponentProps<"nav">) => {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
};

/**
 * Ordered list that holds breadcrumb items
 */
const BreadcrumbList = ({
  className,
  ...props
}: React.ComponentProps<"ol">) => {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground wrap-break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
};

/**
 * Individual breadcrumb list item
 */
const BreadcrumbItem = ({
  className,
  ...props
}: React.ComponentProps<"li">) => {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
};

/* -------------------------------------------------------
   Breadcrumb Link (Polymorphic, No Slot)
------------------------------------------------------- */
// type BreadcrumbLinkProps<T extends React.ElementType> = {
//   as?: T
//   className?: string
// } & React.ComponentPropsWithoutRef<T>

// const BreadcrumbLink = <T extends React.ElementType = "a">({
//   as,
//   className,
//   ...props
// }: BreadcrumbLinkProps<T>) => {
//   const Component = as || "a"

//   return (
//     <Component
//       data-slot="breadcrumb-link"
//       className={cn(
//         "transition-colors hover:text-foreground",
//         className
//       )}
//       {...props}
//     />
//   )
// }

/**
 * Clickable breadcrumb link
 * Supports `asChild` for router links
 */
const BreadcrumbLink = ({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) => {
  const Element = asChild ? Slot : "a";

  return (
    <Element
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
};

/**
 * Active breadcrumb page (current location)
 */
const BreadcrumbPage = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      aria-disabled="true"
      role="link"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  );
};

/**
 * Separator between breadcrumb items
 */
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => {
  return (
    <li
      data-slot="breadcrumb-separator"
      aria-hidden="true"
      role="presentation"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children || <ChevronRight />}
    </li>
  );
};

/**
 * Collapsed breadcrumb indicator (ellipsis)
 */
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      aria-hidden="true"
      role="presentation"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
};

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

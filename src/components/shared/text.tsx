import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

export type Intent = "body" | "h1" | "h2" | "h3" | "leading" | "title";

export interface TextProps<T extends TagOptions = "text"> {
  intent?: Intent;
  weight?: "bold" | "default" | "medium" | "semi";
  color?: "default" | "primary";
  tag?: T;
}

export type TagOptions = keyof JSX.IntrinsicElements;

const styles = cva<{
  intent: {
    [K in Intent]: string;
  };
  weight: {
    bold: string;
    semi: string;
    medium: string;
    default: string;
  };
  color: {
    primary: string;
    default: string;
  };
}>("", {
  variants: {
    intent: {
      body: "text-md",
      leading: "text-[1.125rem] font-medium",
      title: "text-[8rem] font-bold",
      h1: "text-[3rem] font-bold [&>small]:text-[0.7em] [&>small]:dark:text-foreground [&>small]:text-foreground",
      h2: "text-[2rem] font-semibold [&>small]:text-[0.7em] [&>small]:dark:text-foreground [&>small]:text-foreground",
      h3: "font-bold text-[1.5rem] [&>small]:text-[0.7em] [&>small]:dark:text-foreground [&>small]:text-foreground",
    },
    weight: {
      bold: "font-bold",
      semi: "font-semibold",
      medium: "font-medium",
      default: "font-default",
    },
    color: {
      primary: "dark:text-blue-400 text-blue-500",
      default: "",
    },
  },
  defaultVariants: {
    intent: "body",
    weight: "default",
    color: "default",
  },
});

export type CorrectProps<
  T extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements
> = JSX.IntrinsicElements[T];

export type Combined<T, U> = T & U;

export interface TextProps<T extends TagOptions = "text"> {
  intent?: Intent;
  weight?: "bold" | "default" | "medium" | "semi";
  color?: "default" | "primary";
  tag?: T;
  className?: string; 
}

export function Text<T extends TagOptions>({
  intent = "body",
  weight,
  tag,
  color,
  children,
  className,
  ...props
}: React.PropsWithChildren<Combined<CorrectProps<T>, TextProps<T>>>) {
  let tagStr: TagOptions = tag ?? "div";
  if (tagStr === undefined) {
    switch (intent) {
      case "body":
      case "leading":
        tagStr = "p";
        break;
      case "h1":
      case "h2":
      case "h3":
        tagStr = intent;
        break;
      case "title":
        tagStr = "h1";
        break;
      default:
        tagStr = "div";
    }
  }

  const Tag = tagStr as string;

  return (
    <Tag
      className={cn(styles({ intent, weight, color }), className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

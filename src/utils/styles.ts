import { cx, type ClassValue } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export * from "class-variance-authority"

export const ctm = (...args: ClassValue[]) => twMerge(cx(args))

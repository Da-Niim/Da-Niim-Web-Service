import { cx } from "class-variance-authority"
import { ClassValue } from "class-variance-authority/dist/types"

import { twMerge } from "tailwind-merge"

export * from "class-variance-authority"
export type * from "class-variance-authority/dist/types"

export const ctm = (...args: ClassValue[]) => twMerge(cx(args))

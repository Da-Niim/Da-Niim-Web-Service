declare module "class-variance-authority" {
  export type ClassValue = string | number | null | undefined | ClassValue[]
  export function cx(...classValues: ClassValue[]): string
}

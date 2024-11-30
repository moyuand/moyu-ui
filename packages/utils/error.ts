import { isString } from "lodash-es";

class MyUIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MyUIError";
  }
}

export const throwError = (scope: string, message: string) => {
  throw new MyUIError(`[${scope}]: ${message}`);
};

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, message: string): void;
export function debugWarn(scope: string | Error, message?: string) {
  if (process.env.NODE_ENV !== "production") {
    const error = isString(scope) ? new MyUIError(`[${scope}]:${message}`) : scope;
    console.warn(error);
  }
}
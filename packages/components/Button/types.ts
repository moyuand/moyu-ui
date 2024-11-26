import type { Component, ComputedRef, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type ButtonSize = "large" | "default" | "small";
export type NativeType = "button" | "submit" | "reset";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: string;
  icon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
  // onClick?: (e: Event) => void;
}

export interface ButtonEmits {
  (e: 'click', value: MouseEvent ): void;
} 

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
  // disabled: ComputedRef<boolean>;
  // size: ComputedRef<string>;
  // type: ComputedRef<string>;
} 

export interface ButtonGroupProps {
  size?: string;
  disabled?: boolean;
  type?: string;
}

export interface ButtonGroupContext {
  size?: string;
  disabled?: boolean;
  type? : string;
}
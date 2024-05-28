import { component$ } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';


interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: string;
  onClick$?: PropFunction<() => void>;
}

export const Button = component$((props: ButtonProps) => {
  const { label, type = 'button', variant, ...attrs } = props;
  
  return (
    <button data-variant={variant} type={type} {...attrs}>
      {label}
    </button>
  );
});

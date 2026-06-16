import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type ButtonProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' });

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-mauve hover:bg-mauve-dark text-cream shadow-lg shadow-mauve/20 hover:shadow-mauve-dark/30',
  outline:
    'border border-mauve text-mauve hover:bg-mauve hover:text-cream dark:border-mauve-faint dark:text-mauve-faint dark:hover:bg-mauve dark:hover:text-cream',
  ghost:
    'text-[#555] dark:text-warm-300 hover:text-mauve dark:hover:text-mauve-faint hover:bg-mauve/10 dark:hover:bg-mauve/10',
};

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve';
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ((props as { as?: string }).as === 'a') {
    const { as: _as, ...anchorProps } = props as BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };
    void _as;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props as BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
  void _as;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

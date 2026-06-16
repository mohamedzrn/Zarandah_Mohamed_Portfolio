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
    'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30',
  outline:
    'border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400',
  ghost:
    'text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-800',
};

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500';
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

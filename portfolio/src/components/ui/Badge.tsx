interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide rounded-full bg-mauve/10 text-mauve dark:text-mauve-faint border border-mauve/20">
      {children}
    </span>
  );
}

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
      {children}
    </span>
  );
}

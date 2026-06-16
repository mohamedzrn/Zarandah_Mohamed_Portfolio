interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-mauve mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-[#333] dark:text-cream mb-4">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl mx-auto text-[#555] dark:text-warm-300 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

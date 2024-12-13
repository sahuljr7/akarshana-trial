interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 text-center ${className}`}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mx-auto max-w-[700px] text-gray-500">{description}</p>
      )}
    </div>
  );
}
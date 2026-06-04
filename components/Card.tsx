interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-6 ${className}`}>
      {title && <h3 className="text-lg font-semibold text-ink mb-3">{title}</h3>}
      {children}
    </div>
  );
}

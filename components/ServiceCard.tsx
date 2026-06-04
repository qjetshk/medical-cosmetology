interface ServiceCardProps {
  name: string;
  description?: string;
  price?: string;
  duration?: string;
}

export default function ServiceCard({ name, description, price, duration }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 hover:border-coral-light transition-colors">
      <h3 className="font-semibold text-ink mb-1">{name}</h3>
      {description && <p className="text-sm text-ink-muted mb-3">{description}</p>}
      <div className="flex items-center justify-between gap-2 mt-auto text-sm">
        {duration && <span className="text-ink-muted">{duration}</span>}
        {price && <span className="font-medium text-coral">{price}</span>}
      </div>
    </div>
  );
}

import FadeIn from '@/components/FadeIn';
import { serviceCategories } from '@/data/services';

interface Props {
  headingAs?: 'h2' | 'h3';
  className?: string;
}

export default function ServiceCategoryGrid({ headingAs: Tag = 'h3', className }: Props) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-5${className ? ` ${className}` : ''}`}>
      {serviceCategories.map((cat, i) => (
        <FadeIn key={cat.title} delay={0.07 * i}>
          <div className="bg-cream rounded-2xl border border-line p-6 h-full flex flex-col">
            <Tag className="font-semibold text-ink text-lg mb-2">{cat.title}</Tag>
            <p className="text-sm text-ink-muted mb-4">{cat.description}</p>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-ink-muted flex items-start gap-2">
                  <span className="text-sage shrink-0 mt-0.5" aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

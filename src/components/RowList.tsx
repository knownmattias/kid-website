import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export interface RowItem {
  title: string;
  desc?: string;
  href?: string;
}

interface RowListProps {
  items: RowItem[];
}

const RowList = ({ items }: RowListProps) => (
  <div className="divide-y divide-border border-y border-border">
    {items.map((item, i) => {
      const content = (
        <>
          <h3 className="text-base md:text-lg font-display group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <div className="flex items-center justify-end gap-4">
            {item.desc && (
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            )}
            {item.href && (
              <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            )}
          </div>
        </>
      );

      const cls = "grid md:grid-cols-2 gap-4 py-6 md:py-7 group";

      return item.href ? (
        <Link key={i} to={item.href} className={cls}>
          {content}
        </Link>
      ) : (
        <div key={i} className={cls}>
          {content}
        </div>
      );
    })}
  </div>
);

export default RowList;

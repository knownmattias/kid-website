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
          <div className="flex items-center justify-between md:justify-end">
            {item.desc ? (
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            ) : (
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            )}
          </div>
        </>
      );

      return item.href ? (
        <Link
          key={i}
          to={item.href}
          className="grid md:grid-cols-2 gap-4 py-8 md:py-10 group"
        >
          {content}
        </Link>
      ) : (
        <div key={i} className="grid md:grid-cols-2 gap-4 py-8 md:py-10 group">
          {content}
        </div>
      );
    })}
  </div>
);

export default RowList;

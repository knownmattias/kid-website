import { cn } from "@/lib/utils";

const Pill = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-block border border-border rounded-full px-4 py-1.5 text-[10px] text-muted-foreground font-normal uppercase tracking-widest",
      className
    )}
  >
    {children}
  </span>
);

export default Pill;

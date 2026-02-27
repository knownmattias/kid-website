import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const PILLS = ["riskbedömning", "uppföljning", "PEP-screening", "sanktionscreening"];

const FloatingPills = () => {
  const [current, setCurrent] = useState<{ text: string; x: number; y: number; key: number } | null>(null);

  useEffect(() => {
    let key = 0;
    const show = () => {
      const text = PILLS[Math.floor(Math.random() * PILLS.length)];
      const x = 10 + Math.random() * 70; // 10-80% from left
      const y = 15 + Math.random() * 60; // 15-75% from top
      setCurrent({ text, x, y, key: key++ });
    };

    show();
    const interval = setInterval(show, 2800);
    return () => clearInterval(interval);
  }, []);

  if (!current) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[1]">
      <span
        key={current.key}
        className={cn(
          "absolute inline-block border border-border/40 rounded-full px-4 py-1.5 text-[10px] text-muted-foreground/50 font-normal uppercase tracking-widest",
          "animate-[pillFade_2.6s_ease-in-out_forwards]"
        )}
        style={{ left: `${current.x}%`, top: `${current.y}%` }}
      >
        {current.text}
      </span>
    </div>
  );
};

export default FloatingPills;

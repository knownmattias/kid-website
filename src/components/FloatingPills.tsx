import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const FloatingPills = () => {
  const { t, lang } = useLanguage();
  const pills = (t("industries.floatingPills") as unknown as string[] | undefined) ?? [];
  const indexRef = useRef(0);
  const pillsRef = useRef(pills);
  pillsRef.current = pills;
  const [current, setCurrent] = useState<{ text: string; x: number; y: number; key: number } | null>(null);

  useEffect(() => {
    if (pillsRef.current.length === 0) return;

    let key = 0;
    const show = () => {
      const list = pillsRef.current;
      if (list.length === 0) return;
      const text = list[indexRef.current % list.length];
      indexRef.current += 1;
      // Two zones: right of text (x:50-90, y:10-65) and below text (x:5-45, y:55-85)
      const useRight = Math.random() > 0.4;
      const x = useRight ? 50 + Math.random() * 40 : 5 + Math.random() * 40;
      const y = useRight ? 10 + Math.random() * 55 : 55 + Math.random() * 30;
      setCurrent({ text, x, y, key: key++ });
    };

    show();
    const interval = setInterval(show, 2800);
    return () => clearInterval(interval);
  }, [lang]);

  if (!current || pills.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[1]">
      <span
        key={current.key}
        className={cn(
          "absolute inline-block border border-border/40 rounded-full px-4 py-1.5 text-[10px] text-gray-700 font-normal uppercase tracking-widest bg-card",
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

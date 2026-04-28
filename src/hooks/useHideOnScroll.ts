import { useEffect, useState } from "react";

/**
 * Возвращает true только когда пользователь у самого верха страницы
 * (scrollY < threshold). Как только страница прокручена ниже — возвращает false
 * и больше не возвращается в true до тех пор, пока пользователь снова не
 * окажется у самого верха. Это убирает «дёрганье» шапки при скролле вверх.
 */
export function useHideOnScroll(threshold = 24) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setVisible(y < threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}

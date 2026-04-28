interface LogoProps {
  className?: string;
  title?: string;
}

/**
 * Логотип Ольгинского монастыря: православный крест над волной (исток Волги).
 * Исполнен в сдержанной песочно-золотой гамме, подходит для светлого фона.
 * Использует currentColor — цвет задаётся через className (text-accent и т.п.).
 */
export function Logo({ className, title = "Ольгинский монастырь у истока Волги" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Внешний медальон */}
        <circle cx="32" cy="32" r="29" strokeWidth="1" opacity="0.35" />
        <circle cx="32" cy="32" r="26" strokeWidth="0.6" opacity="0.55" />

        {/* Православный восьмиконечный крест */}
        <g strokeWidth="1.6">
          {/* вертикаль */}
          <line x1="32" y1="10" x2="32" y2="44" />
          {/* верхняя перекладина (титло) */}
          <line x1="27.5" y1="16" x2="36.5" y2="16" />
          {/* основная перекладина */}
          <line x1="23" y1="22" x2="41" y2="22" />
          {/* нижняя косая перекладина */}
          <line x1="26" y1="33" x2="38" y2="29" />
        </g>

        {/* Волна — исток Волги, три гряды */}
        <g strokeWidth="1.2" opacity="0.9">
          <path d="M10 48 Q 18 44, 26 48 T 42 48 T 54 48" />
        </g>
        <g strokeWidth="1" opacity="0.7">
          <path d="M12 52 Q 20 48.5, 28 52 T 44 52 T 54 52" />
        </g>
        <g strokeWidth="0.8" opacity="0.5">
          <path d="M14 55.5 Q 22 53, 30 55.5 T 46 55.5 T 54 55" />
        </g>
      </g>
    </svg>
  );
}

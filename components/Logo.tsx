interface LogoProps {
  variant?: "compact" | "full";
  className?: string;
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M50 6
           L60 6 L61.5 17.5
           A34 34 0 0 1 71 22.3
           L80.5 15.8 L88.2 23.5 L81.7 33
           A34 34 0 0 1 86.5 42.5 L98 44
           L98 56 L86.5 57.5
           A34 34 0 0 1 81.7 67 L88.2 76.5
           L80.5 84.2 L71 77.7
           A34 34 0 0 1 61.5 82.5 L60 94
           L50 94
           A44 44 0 0 1 50 6 Z"
        fill="currentColor"
      />
      <circle cx="58" cy="50" r="17" fill="var(--logo-bg, #080B13)" />
    </svg>
  );
}

export function Logo({ variant = "compact", className = "" }: LogoProps) {
  if (variant === "full") {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <LogoMark className="h-16 w-16 text-brand-blue" />
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            FORTNELCHER
          </p>
          <p className="mt-1 max-w-xs text-[11px] uppercase leading-snug tracking-wide text-steel-400">
            Engenharia, Comércio, Manutenção e Instalação de Equipamentos LTDA
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 text-brand-blue" />
      <span className="font-display text-lg font-bold tracking-tight text-white">
        FORTNELCHER
      </span>
    </div>
  );
}

import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Github = ({ className = "w-5 h-5", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Linkedin = ({ className = "w-5 h-5", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Twitter = ({ className = "w-5 h-5", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const TechIcon = ({ name, className = "w-4 h-4" }: { name: string; className?: string }) => {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case "react":
      return (
        <svg viewBox="-11.5 -10.23 23 20.46" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "next.js":
      return (
        <svg viewBox="0 0 180 180" fill="none" className={className}>
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path
            d="M149.5 157.5L69.1 54H54v72h12.8V70.3l72.1 93.3c3.8-1.8 7.4-3.8 10.6-6.1z"
            fill="#ffffff"
          />
          <rect x="115" y="54" width="12" height="72" fill="#ffffff" />
        </svg>
      );

    case "typescript":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M11.5 17.5H9.5V11H7V9.5H14V11H11.5V17.5ZM18.5 13.5C18.5 12.5 17.5 12 16.5 11.8L15.5 11.6C15 11.5 14.5 11.2 14.5 10.7C14.5 10.2 15 9.8 15.8 9.8C16.5 9.8 17.2 10.1 17.6 10.6L18.6 9.4C18 8.7 17 8.3 15.8 8.3C14.2 8.3 13 9.3 13 10.8C13 12.2 14 12.8 15.2 13.1L16.2 13.3C16.8 13.4 17.2 13.7 17.2 14.3C17.2 14.9 16.5 15.3 15.6 15.3C14.6 15.3 13.8 14.8 13.2 14.1L12.1 15.4C13 16.4 14.2 16.8 15.6 16.8C17.4 16.8 18.5 15.6 18.5 13.5Z"
            fill="#ffffff"
          />
        </svg>
      );

    case "tailwind css":
      return (
        <svg viewBox="0 0 24 24" fill="#06B6D4" className={className}>
          <path d="M12 6C9.3 6 7.7 7.3 7 10C8 8.7 9.2 8.2 10.5 8.5C11.3 8.7 11.8 9.2 12.4 9.9C13.4 10.9 14.5 12 17 12C19.7 12 21.3 10.7 22 8C21 9.3 19.8 9.8 18.5 9.5C17.7 9.3 17.2 8.8 16.6 8.1C15.6 7.1 14.5 6 12 6ZM7 12C4.3 12 2.7 13.3 2 16C3 14.7 4.2 14.2 5.5 14.5C6.3 14.7 6.8 15.2 7.4 15.9C8.4 16.9 9.5 18 12 18C14.7 18 16.3 16.7 17 14C16 15.3 14.8 15.8 13.5 15.5C12.7 15.3 12.2 14.8 11.6 14.1C10.6 13.1 9.5 12 7 12Z" />
        </svg>
      );

    case "framer motion":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
        </svg>
      );

    case "javascript":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M12.7 18.2C13.2 19 14 19.5 15.2 19.5C16.5 19.5 17.3 18.8 17.3 17.4C17.3 14.3 12.6 14.8 12.6 11.2C12.6 8.7 14.6 7.2 17.3 7.2C19.1 7.2 20.3 8 21 9.4L19 10.6C18.5 9.7 17.9 9.3 17.1 9.3C16.2 9.3 15.5 9.9 15.5 10.9C15.5 13.8 20.2 13.3 20.2 17C20.2 19.7 18.1 21.4 15 21.4C13 21.4 11.3 20.5 10.5 18.9L12.7 18.2ZM6.3 18.4C6.8 19.2 7.5 19.6 8.4 19.6C9.4 19.6 10.1 19.1 10.1 17.6V7.4H13V17.7C13 20.6 11.2 21.4 8.5 21.4C6.2 21.4 4.7 20.2 4.1 18.7L6.3 18.4Z"
            fill="#000000"
          />
        </svg>
      );

    case "node.js":
      return (
        <svg viewBox="0 0 24 24" fill="#5FA04E" className={className}>
          <path d="M12 1.8l10.2 5.9v11.8L12 25.5 1.8 19.6V7.7L12 1.8zm0 2.3L4 8.8v8.4l8 4.6 8-4.6V8.8l-8-4.7z" />
        </svg>
      );

    case "graphql":
      return (
        <svg viewBox="0 0 24 24" fill="#E10098" className={className}>
          <path d="M12 2L2 7.8v11.5L12 25l10-5.7V7.8L12 2zm0 2.4l7.6 4.4v8.8L12 22l-7.6-4.4V8.8L12 4.4z" />
        </svg>
      );

    case "postgresql":
      return (
        <svg viewBox="0 0 25.6 25.6" className={className}>
          <style>{`.B{stroke-linecap:round}.C{stroke-linejoin:round}.D{stroke-linejoin:miter}.E{stroke-width:.716}`}</style>
          <g fill="none" stroke="#fff">
            <path
              d="M18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81"
              fill="#000"
              stroke="#000"
              strokeLinecap="butt"
              strokeWidth="2.149"
              className="D"
            />
            <path
              d="M23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0-1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z"
              fill="#336791"
              stroke="none"
            />
            <g className="E">
              <g className="B">
                <path
                  d="M12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017M10.356 2.2S1.072-1.596 1.504 7.033c.092 1.836 2.63 13.9 5.66 10.25C8.27 15.95 9.27 14.907 9.27 14.907m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687"
                  className="C"
                />
                <path
                  d="M20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99 8.196 7.99 8.196"
                  strokeJoin="bevel"
                />
              </g>
              <g className="C">
                <path d="M11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z" />
                <path
                  d="M11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733"
                  className="B"
                />
              </g>
            </g>
            <g fill="#fff" className="D">
              <path
                d="M10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z"
                strokeWidth=".239"
              />
              <path
                d="M19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z"
                strokeWidth=".119"
              />
            </g>
            <path
              d="M20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68"
              className="B C E"
            />
          </g>
        </svg>
      );

    case "redis":
      return (
        <svg viewBox="0 0 24 24" fill="#DC382D" className={className}>
          <path d="M2 7l10-5 10 5-10 5L2 7zm0 5l10 5 10-5M2 17l10 5 10-5" stroke="#DC382D" strokeWidth="2" fill="none" />
        </svg>
      );

    case "figma":
      return (
        <svg viewBox="0 0 38 57" fill="none" className={className}>
          <path d="M19 28.5c0-5.2 4.3-9.5 9.5-9.5s9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5H19v-9.5z" fill="#FF7262" />
          <path d="M0 47.5C0 42.3 4.3 38 9.5 38H19v9.5c0 5.2-4.3 9.5-9.5 9.5S0 52.7 0 47.5z" fill="#0ACF83" />
          <path d="M19 0v19h9.5c5.2 0 9.5-4.3 9.5-9.5S33.7 0 28.5 0H19z" fill="#1ABCFE" />
          <path d="M0 9.5C0 14.7 4.3 19 9.5 19H19V0H9.5C4.3 0 0 4.3 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7 4.3 38 9.5 38H19V19H9.5C4.3 19 0 23.3 0 28.5z" fill="#A259FF" />
        </svg>
      );

    case "ui/ux systems":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );

    case "design tokens":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      );

    case "git":
      return (
        <svg viewBox="0 0 24 24" fill="#F05032" className={className}>
          <path d="M23.5 10.9L13.1.5c-.6-.6-1.6-.6-2.2 0L8.7 2.6l2.8 2.8c.6-.2 1.4-.1 1.9.4.5.5.7 1.3.4 1.9l2.7 2.7c.6-.2 1.4-.1 1.9.4.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.5-.5-.7-1.3-.4-1.9L12.9 9V16.3c.2.1.4.2.6.4.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.7-.7-.7-1.9 0-2.7.2-.2.5-.4.7-.4V9.7c-.3-.1-.5-.2-.7-.4-.5-.5-.7-1.3-.4-2L5.6 4.5.5 9.7c-.6.6-.6 1.6 0 2.2l10.5 10.5c.6.6 1.6.6 2.2 0l10.4-10.4c.6-.6.6-1.6-.1-2.1z" />
        </svg>
      );

    case "vite":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M21.7 2.7L12.5 21.2 3.3 2.7l9.2 1.5 9.2-1.5z" fill="#646CFF" />
          <path d="M12 4.3L5.5 3.2 12.5 17.2l7-14L12 4.3z" fill="#BD34FE" />
          <path d="M14.5 5.5l-6 1.5 2.5 5 5-7.5z" fill="#FFD029" />
        </svg>
      );

    case "vercel":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      );

    case "docker":
      return (
        <svg viewBox="0 0 24 24" fill="#2496ED" className={className}>
          <path d="M14 11h2v-2h-2v2zm-3-5h2V4h-2v2zm0 3h2V7h-2v2zm-3 0h2V7H8v2zm-3 0h2V7H5v2zm0 3h2v-2H5v2zm3 0h2v-2H8v2zm3 0h2v-2h-2v2zm-8 3h2v-2H3v2z" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};

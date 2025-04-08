export function Warning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from coolicons by Kryston Schwarze - https://creativecommons.org/licenses/by/4.0/ */}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8.45v4M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18m.05-5.55v.1h-.1v-.1z"
      ></path>
    </svg>
  );
}

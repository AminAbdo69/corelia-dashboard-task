export function Symbol(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        d="m9 20l-1.4-1.4l1.75-1.8q-3.2-.425-5.275-1.75T2 12q0-2.075 2.888-3.537T12 7t7.113 1.463T22 12q0 1.55-1.662 2.775T16 16.6v-2.05q1.925-.5 2.963-1.237T20 12q0-.8-2.137-1.9T12 9t-5.863 1.1T4 12q0 .6 1.275 1.438T8.9 14.7l-1.3-1.3L9 12l4 4z"
      ></path>
    </svg>
  );
}

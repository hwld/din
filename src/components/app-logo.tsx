type Props = React.ComponentPropsWithoutRef<"svg"> & { width?: number };
export const AppLogo: React.FC<Props> = ({ width = 25, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    viewBox="0 0 489 483"
    fill="none"
    {...props}
  >
    <path
      fill="#F5F5F5"
      d="m3.92 275 47.5 207 85.501-43.5c58.8 57.6 144.166 46.667 179.5 34l119-66.5c65.6-38 57-133.5 44.5-176.5v-145c-.4-46-30.167-75.5-45-84.5l-88.5 46c-55.2-46.8-132.334-32.166-164-19l-100 55c-86 48.4-88.167 148.833-78.5 193Z"
    />
    <path
      fill="#171717"
      d="m37.92 260 38 168 49.001-25c11.5-6 18-6 31.5 4.5 55.6 50.8 120.5 42.5 146 32l113-65.5c46.8-28.4 38.5-105.167 28.5-140V91c0-19.2-14-36.667-21-43l-78 43c-27-32.5-91-58-144.5-34l-100 55.5c-62.5 41.5-69 107-62.5 147.5Z"
    />
    <path
      fill="#65A30D"
      fillRule="evenodd"
      d="M87 343.5h48l82.373 62.603C218.764 411.785 223.89 416 230 416c7.18 0 13-5.82 13-13 0-5.694-3.661-10.534-8.758-12.292L142 317.5H76l11 26Z"
      clipRule="evenodd"
    />
    <path
      fill="#84CC16"
      fillRule="evenodd"
      d="M295.959 384.744c.027-.411.041-.826.041-1.244a18.43 18.43 0 0 0-1.775-7.917c25.024 4.525 56.053 5.174 78.275-8.583 42-26 50.5-51.5 51.5-74l-89-12.5c-18.5-3-43.2-23.4-6-45l95-55.5-8.5-9V80L200.027 207.307l95.932 177.437Z"
      clipRule="evenodd"
    />
    <path
      fill="#65A30D"
      fillRule="evenodd"
      d="M214.921 198.508 132 247.5 62 249l4.5 30h78l118 88c1.29.493 2.68.997 4.161 1.506-4.642 3.361-7.661 8.825-7.661 14.994 0 10.217 8.283 18.5 18.5 18.5s18.5-8.283 18.5-18.5a18.43 18.43 0 0 0-1.775-7.917c5.932 1.073 12.201 1.928 18.61 2.424l-97.914-179.499Z"
      clipRule="evenodd"
    />
    <path
      fill="#171717"
      d="M275 257.5c0 20.711-16.789 37.5-37.5 37.5S200 278.211 200 257.5s16.789-37.5 37.5-37.5 37.5 16.789 37.5 37.5Z"
    />
    <path
      fill="#65A30D"
      d="M254 257.5c0 9.113-7.387 16.5-16.5 16.5s-16.5-7.387-16.5-16.5 7.387-16.5 16.5-16.5 16.5 7.387 16.5 16.5Z"
    />
    <path
      fill="#65A30D"
      fillRule="evenodd"
      d="M170.549 120.552a18.904 18.904 0 0 0 2.506 5.785l-30.507 19.441C139.063 141.634 133.839 139 128 139c-10.493 0-19 8.507-19 19s8.507 19 19 19c7.675 0 14.287-4.551 17.286-11.102l37.581-24.038-12.318-21.308Zm19.04 32.936L135.5 186.5H72l-8 29 70.5 1 67.607-41.36-12.518-21.652Z"
      clipRule="evenodd"
    />
    <path
      fill="#84CC16"
      fillRule="evenodd"
      d="M201.637 175.428 262 138.5v-27.006c4.842-3.444 8-9.1 8-15.494 0-10.493-8.507-19-19-19s-19 8.507-19 19c0 6.948 3.729 13.025 9.295 16.338L242 121.5l-52.881 32.275 12.518 21.653Zm-19.235-33.271 12.818-8.198C202.658 131.383 208 124.315 208 116c0-10.493-8.507-19-19-19s-19 8.507-19 19c0 2.48.475 4.849 1.339 7.021l11.063 19.136Z"
      clipRule="evenodd"
    />
  </svg>
);
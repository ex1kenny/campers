import css from "./Icon.module.css";

export const Icon = ({
  id,
  width = 24,
  height = 24,
  fill,
  stroke,
  isInputStyled = false,
  isCloseStyled = false,
}) => {
  const basePath =
    import.meta.env.MODE === "production"
      ? `${import.meta.env.BASE_URL}/`
      : "/";
  return (
    <svg
      className={
        isInputStyled ? css.icon : null || isCloseStyled ? css.close : null
      }
      width={width}
      height={height}
      role="img"
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`${basePath}sprite.svg#${id}`} />
    </svg>
  );
};

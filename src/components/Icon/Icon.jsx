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
      <use xlinkHref={`/sprite.svg#${id}`} />
    </svg>
  );
};

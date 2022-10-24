 export const ConditionalRenderingComponent = ({ isBlue }) => {
  if (isBlue) {
    return <span>I am blue</span>;
  }
  return <span>I am red</span>;
}

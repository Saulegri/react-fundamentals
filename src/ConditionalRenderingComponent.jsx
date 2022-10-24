   export const ConditionalRenderingComponent = ({ isBlue }) => {
    return <span>
      I am {isBlue = true && "blue"}
      I am {isBlue && "red"}
      </span>;
  };

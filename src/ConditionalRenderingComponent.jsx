const Color = ({text, isBlue})=> {
    return (
        <span> {text}{isBlue ? 'blue' : 'red'} </span>
        );
  }

  export function ConditionalRenderingComponent (){
    return (
    <span>
        <Color
        text= 'I am '
        isBlue={true}
        /> 
        <Color 
        text = 'I am '
        isBlue={false}
        /> 
        </span>
    )
  }

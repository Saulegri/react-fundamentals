export function InteractionEvents33(){
    function handleClick(){
        alert('Button was clicked.')
    }
    function handleChange(e){
        console.log(e.target.value)
    }
    return (
        <div>
        <button onClick={handleClick}>
          Button
        </button>
        <input type = 'text' onInput={handleChange} />
        </div>
        );
    }

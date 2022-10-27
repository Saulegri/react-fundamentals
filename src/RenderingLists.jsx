const listForRender = [
    { value: 3, name: "List item value 3" },
    { value: 4, name: "List item value 4" },
    { value: 10, name: "List item value 10" },
    { value: 13, name: "List item value 13" },
    { value: 62, name: "List item value 62" },
    { value: 22, name: "List item value 22" },
    { value: 47, name: "List item value 47" },
    { value: 7, name: "List item value 7" },
    { value: 8, name: "List item value 8" },
  ];
  
  export function RenderingLists() {
    const listItems = listForRender.map(list =>
    <li>{list.name}</li>
    );
    const valueList = listForRender.filter(list=>list.value).map(list => {
        return list.value %2 ===0 ?
        <li> {list.name}</li> 
        :<div></div>
  });
    return(
    <section>
    <h2>Full list:</h2>
    {listItems}
    <h2>Filtered list:</h2>
    {valueList}
    </section>
    );
  }
  
  
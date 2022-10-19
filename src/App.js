import './App.css';

function ChildrenWithTitle({children,title}){
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

function FirstReactComponent() {
  return (
    <div>
      <p>I am new here!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitle title="I am title">
        I am children
      </ChildrenWithTitle>
    </div>
  );
}

export default App

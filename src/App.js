import './App.css';
import ChildrenWithTitle from './ChildrenWithTitle.jsx';
import {FirstReactComponent} from './FirstReactComponent.jsx';

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
export default App;

import './App.css';
import ChildrenWithTitle from './ChildrenWithTitle.jsx';
import {FirstReactComponent} from './FirstReactComponent.jsx';
import {ConditionalRenderingComponent} from './ConditionalRenderingComponent.jsx';

 function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitle title="I am title">
        I am children
      </ChildrenWithTitle>
      <ConditionalRenderingComponent/>
    </div>
  );
}
export default App;

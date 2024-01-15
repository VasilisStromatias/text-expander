import "./App.css";
import TextExpander from "./components/TextExpander";

function App() {
  return (
    <>
      <TextExpander wordsToCollapse={100}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pharetra leo at enim viverra finibus. Donec orci sapien, ornare vel
        tempor vitae, ullamcorper eu purus. Etiam semper tincidunt augue at
        convallis. Cras pulvinar ipsum id iaculis pretium. Mauris ultrices in
        erat id vehicula. Morbi molestie enim id augue placerat, eget bibendum
        turpis tincidunt. Mauris sapien massa, fermentum nec ultricies quis,
        dapibus eget nisl. Donec venenatis sollicitudin bibendum. Mauris
        consectetur vel nulla eget semper. Vestibulum tristique dui sit amet
        velit elementum, nec suscipit nulla tincidunt. Pellentesque dictum
        hendrerit elementum. Sed at tincidunt urna, et mollis ipsum.
        Pellentesque eu pellentesque nulla.
      </TextExpander>
      <TextExpander expandText="Show text" buttonColor="orange">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pharetra leo at enim viverra finibus. Donec orci sapien, ornare vel
        tempor vitae, ullamcorper eu purus. Etiam semper tincidunt augue at
        convallis. Cras pulvinar ipsum id iaculis pretium. Mauris ultrices in
        erat id vehicula. Morbi molestie enim id augue placerat, eget bibendum
        turpis tincidunt. Mauris sapien massa, fermentum nec ultricies quis,
        dapibus eget nisl. Donec venenatis sollicitudin bibendum. Mauris
        consectetur vel nulla eget semper. Vestibulum tristique dui sit amet
        velit elementum, nec suscipit nulla tincidunt. Pellentesque dictum
        hendrerit elementum. Sed at tincidunt urna, et mollis ipsum.
        Pellentesque eu pellentesque nulla.
      </TextExpander>
      <TextExpander containerClass="test-class">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pharetra leo at enim viverra finibus. Donec orci sapien, ornare vel
        tempor vitae, ullamcorper eu purus. Etiam semper tincidunt augue at
        convallis. Cras pulvinar ipsum id iaculis pretium. Mauris ultrices in
        erat id vehicula. Morbi molestie enim id augue placerat, eget bibendum
        turpis tincidunt. Mauris sapien massa, fermentum nec ultricies quis,
        dapibus eget nisl. Donec venenatis sollicitudin bibendum. Mauris
        consectetur vel nulla eget semper. Vestibulum tristique dui sit amet
        velit elementum, nec suscipit nulla tincidunt. Pellentesque dictum
        hendrerit elementum. Sed at tincidunt urna, et mollis ipsum.
        Pellentesque eu pellentesque nulla.
      </TextExpander>
    </>
  );
}

export default App;

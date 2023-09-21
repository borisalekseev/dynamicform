import {Element} from "./el"
import {IProcessingProps, ProcessingFormProvider} from "./provider"
import logo from './logo.svg';
import './App.css';
import { useFormikContext } from "formik";
import { Button } from "react-bootstrap";

const A = () => {
  const {values} = useFormikContext<IProcessingProps>()
  return <Button onClick={() => console.log(values)}>AAA</Button>
}

function App() {
  return (
    <div className="App">
      <ProcessingFormProvider list={[1, 2, 4]}>
        <>{[1, 2, 4].map((el, index) => <Element key={index} distinct_id={el}/>)}
        <A></A>
        </>
      </ProcessingFormProvider>
    </div>
  );
}

export default App;

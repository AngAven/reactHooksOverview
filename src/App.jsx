import {Counter} from "./hooks/useStateHook/01_Counter.jsx";
import {TextField} from "./hooks/useStateHook/02_TextField.jsx";
import {CheckBox} from "./hooks/useStateHook/03_CheckBox.jsx";
import {Form} from "./hooks/useStateHook/04_Form.jsx";
import {FormObject} from "./hooks/useStateHook/FormObject.jsx";
import {NestedObject} from "./hooks/useStateHook/NestedObject.jsx";

function App() {

    return (
        <div className={'text-center'}>
            <div>
                <h1>useState examples</h1>
                <Counter/>
                <TextField/>
                <CheckBox/>
                <Form/>
                <FormObject/>
                <NestedObject/>
            </div>
        </div>
    )
}

export default App

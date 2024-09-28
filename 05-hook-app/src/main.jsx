// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
// import { HookApp } from './HookApp.jsx'
import './index.css';
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

createRoot(document.getElementById('root')).render(
  // {/* <StrictMode> */}
  // {/* <CounterApp /> */}
  // {/* <CounterWithCustomHook /> */}
  // {/* <HookApp /> */}
  // <SimpleForm />
  // <FormWithCustomHook />,
  <MultipleCustomHooks />,
  // {/* </StrictMode> */}
);

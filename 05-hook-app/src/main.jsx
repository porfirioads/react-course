// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
// import { HookApp } from './HookApp.jsx'
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './07-memoHook/MemoHook';
// import { CallbackHook } from './07-memoHook/CallbackHook';
import { Padre } from './08-tareaMemo/Padre';

createRoot(document.getElementById('root')).render(
  // {/* <StrictMode> */}
  // {/* <CounterApp /> */}
  // {/* <CounterWithCustomHook /> */}
  // {/* <HookApp /> */}
  // <SimpleForm />
  // <FormWithCustomHook />,
  // <MultipleCustomHooks />,
  // <FocusScreen />
  // <Layout />
  // <MemoHook />,
  // <CallbackHook />,
  <Padre />,
  // {/* </StrictMode> */}
);

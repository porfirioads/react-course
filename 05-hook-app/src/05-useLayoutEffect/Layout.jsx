import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';
import { useLayoutEffect, useRef, useState } from 'react';

export const Layout = () => {
  const [text, setText] = useState('');
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const pRef = useRef();

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();

    setBoxSize({ width, height });
  }, [text]);

  const onTextAppend = () => {
    const randomString =
      Math.random().toString(36).substring(2) +
      Math.random().toString(36).substring(2) +
      Math.random().toString(36).substring(2) +
      Math.random().toString(36).substring(2) +
      Math.random().toString(36).substring(2);
    setText(`${text} ${randomString}`);
  };

  return (
    <>
      <p ref={pRef} className="alert alert-info">
        {text}
      </p>
      <pre>{JSON.stringify(boxSize)}</pre>

      <button className="btn btn-primary" onClick={onTextAppend}>
        Append
      </button>
    </>
  );
};

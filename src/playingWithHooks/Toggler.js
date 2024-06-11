import React, { useState } from 'react';
import useToggle from './hooks/useToggle';

export default function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isLove, toggleIsLove] = useToggle(true);
  return (
    <div>
        <span>{isHappy ? '😀' : '😭'}</span>
        <button id="happy" onClick={toggleIsHappy}>Toggle is Happy</button>
        <span>{isLove ? 'yes' : 'no'}</span>
        <button id="love" onClick={toggleIsLove}>Toggle is Love</button>
    </div>
  )
}
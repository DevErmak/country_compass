import React, { useState } from 'react';
import './modal.css';
type Props = {
  children: React.ReactNode;
};

export default function Login({ children }: Props) {
  const [active, setActive] = useState(true);
  return (
    <div className="modal-auth" onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}></div>
      {/* <div className="sign-in">Sign in</div>
      <input
      // className={isDuplicate ? 'error-input-task' : 'input-task'}
      // value={inputTask}
      // type="text"
      // onKeyUpCapture={(e) => addTaskEnter(e)}
      // placeholder="введите задачу"
      // onChange={(e) => setInputTask(e.target.value)}
      ></input>
      <input></input> */}
    </div>
  );
}

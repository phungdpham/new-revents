import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment, decrement } from "./testReducer";
import { openModal } from "../../app/common/modals/modalReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content="INCREMENT"
        color="green"
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content="DECREMENT"
        color="red"
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content="Open modal"
        color="teal"
      />
    </>
  );
}

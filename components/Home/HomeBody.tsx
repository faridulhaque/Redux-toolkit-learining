import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slices/counterSlice";
import { getUsers } from "../../redux/slices/usersSlice";
import { RootState } from "../../redux/store/store";
import homeBodyStyles from "../../styles/HomeBody.module.css";

const HomeBody = () => {
  const dispatch: any = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect((): any => {
    dispatch(getUsers());
  }, [dispatch]);

  if(isLoading){
    return <h1 className="heading">Loading...</h1>
  }

  if(error.length){
    return <h1 className="heading">Something went wrong</h1>
  }

  return (
    <>

      <h1 className="heading">Welcome to react-toolkit-practice</h1>
      <h2 className="heading">
        This is jsonPlaceholderApi data length: {users?.length}
      </h2>
      <div className={homeBodyStyles.counter}>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{value}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
};

export default HomeBody;

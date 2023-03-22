import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "./redux/actions";
import MainLayout from "./layout/mainLayout";

function App() {
  const dispatch = useDispatch();
  const info = useSelector(state => state.info);

  useEffect(() => {
      dispatch(getInfo())
  }, [dispatch]);

  return (
    <MainLayout info={info} />
  );
}

export default App;

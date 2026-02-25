import { useContext } from "react";
import DataContext from "../context/DataContext.jsx";

export default function useData() {
  return useContext(DataContext);
}

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./Reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [apiProducts, setApiProducts] = useState([]);
  const [search, setSearch] = useState([]);

  const fetching = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setApiProducts(data);
  };

  const initialState = {
    products: [],
    carts: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetching();
  }, []);

  useEffect(() => {
    dispatch({ type: "SHOW_PRODUCTS", payload: apiProducts });
    const filterProducts = apiProducts.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    dispatch({ type: "SHOW_PRODUCTS", payload: filterProducts });
  }, [apiProducts, search]);

  const data = {
    state,
    dispatch,
    setSearch,
    search,
  };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const CurstonStateContext = () => useContext(StateContext);

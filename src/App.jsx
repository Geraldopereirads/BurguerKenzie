import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { CarrinhoCheio } from "./Components/Main/CarrinhoCheio/CarrinhoCheio";
import { CarrinhoVazio } from "./Components/Main/CarrinhoVazio/CarrinhoVazio";
import { FoodList } from "./Components/Main/FoodList/FoodList";
import { api } from "./Services/Api/Api";
import { ToastContainer, toast } from "react-toastify";
import { ContainerAll } from "./style/AppStyle";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localStorageCard = localStorage.getItem("@HamburgueriaKenzie");
  const [foodList, setFoodList] = useState([]);
  const [foodListCarrinho, setFoodListCarrinho] = useState(
    localStorageCard ? JSON.parse(localStorageCard) : []
  );
  const [search, setSearch] = useState("");

  const searchFoodList = foodList.filter((food) => {
    return search === "" ? true : food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  });

  useEffect(() => {
    async function loadFoodData() {
      try {
        const response = await api.get("products");
        setFoodList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadFoodData();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "@HamburgueriaKenzie",
      JSON.stringify(foodListCarrinho)
    );
  }, [foodListCarrinho]);

  const addFoodCarrinho = (Carrinhofood) => {
    if (!foodListCarrinho.some((food) => food.id === Carrinhofood.id)) {
      setFoodListCarrinho([...foodListCarrinho, Carrinhofood]);
    } else {
      toast.error("Você já adicionou esse Hamburguer.");
    }
  };

  const removeFoodCarrinho = (id) => {
    const newCarrinho = foodListCarrinho.filter((food) => food.id !== id);
    setFoodListCarrinho(newCarrinho);
  };


  const removeAllFoods = () => {
    setFoodListCarrinho([]);
  }

  return (
    <main className="App">
      <Header setSearch={setSearch} />
      <ContainerAll>
        <FoodList searchFoodList={searchFoodList} addFoodCarrinho={addFoodCarrinho} />
        {foodListCarrinho.length > 0 ? (
          <CarrinhoCheio
            foodListCarrinho={foodListCarrinho}
            removeFoodCarrinho={removeFoodCarrinho}
            removeAllFoods={removeAllFoods}/> 
        )   : (
          <CarrinhoVazio />
        )}
      </ContainerAll>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </main>
  );
}

export default App;

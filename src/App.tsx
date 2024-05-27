import Logo from "./assets/hamb-1.png";
import Hambuguer1 from "./assets/hamb-1.png";
import Hambuguer2 from "./assets/hamb-2.png";
import Hambuguer3 from "./assets/hamb-3.png";
import Hambuguer4 from "./assets/hamb-4.png";
import Hambuguer5 from "./assets/hamb-5.png";
import Hambuguer6 from "./assets/hamb-6.png";
import Driking from "./assets/refri-1.png";
import Driking1 from "./assets/refri-2.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

function App() {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [cart, setCart] = useState<[] | any>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    console.log("cart", cart);
  }, [cart, total])

  const addToCart = (name: string, price: number, quantity: number) => {
    const verificQuantity = cart.findIndex((c: string | any) => c.name === name);
    if (verificQuantity !== -1) {
      const updatedCart = cart.map((item: any, index: number) =>
        index === verificQuantity ? { ...item, quantity: item.quantity + quantity} : item
      );
      setCart(updatedCart);
      return;
    }
    setCart([...cart, { name, price, quantity }])
  }

  const removeFromCart = (nameRemove: string) => {
    const updatedCart = cart.filter((item: string | any) => item.name !== nameRemove)
    console.log(updatedCart)
    setCart(updatedCart)
  }

  async function ModalOpen() {
    setOpenModal(true);
  }

  async function closeModal() {
    setOpenModal(false);
  }

  const handleChildClick = (event: Event | any) => {
    event.stopPropagation();
  };

  return (
    <>

      <header className="w-full h-[420px] bg-zinc-900 bg-home bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={Logo}
            alt="Logo"
            className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
          />
          <h1 className="text-4xl mt-4 mb-2 font-bold text-white">Dev Burguer</h1>

          <span className="text-white font-medium">Rua dev 10, Belo Horizonte - MG</span>

          <div className="bg-green-600 px-4 py-1 rounded-lg mt-5">
            <span className="text-white font-medium">Seg a Dom - 18:00 as 22:00</span>
          </div>
        </div>
      </header>

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">Conheça nosso menu</h2>

      <div>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-7 mx-auto max-w-7xl px-2 mb-16">

          <div className="flex gap-2">
            <img
              src={Hambuguer1}
              alt="Hambuguer1"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div>
              <p className="font-bold">Hambuguer Smash</p>
              <p className="text-sm">Pão levinho de fermentação natural, burguer 160g, queijo e maionese da casa.</p>

              <div className="flex items-center gap-2 justify-between mt-3 ">
                <p className="font-bold text-lg">R$ 18.90</p>
                <button onClick={() => addToCart("Hambuguer Smash", 18.90, 1)} className="bg-red-500 hover:bg-red-800 px-3 rounded ">
                  <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <img
              src={Hambuguer2}
              alt="Hambuguer"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div>
              <p className="font-bold">Hambuguer Duplo</p>
              <p className="text-sm">Pão levinho de fermentação natural, burguer 160g, queijo e maionese da casa.</p>

              <div className="flex items-center gap-2 justify-between mt-3 ">
                <p className="font-bold text-lg">R$ 32.90</p>
                <button onClick={() => addToCart("Hambuguer Duplo", 32.90, 1)} className="bg-red-500 hover:bg-red-800 px-3 rounded ">
                  <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <img
              src={Hambuguer3}
              alt="Hambuguer"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div>
              <p className="font-bold">Hambuguer da casa</p>
              <p className="text-sm">Pão levinho de fermentação natural, burguer 160g, queijo e maionese da casa.</p>

              <div className="flex items-center gap-2 justify-between mt-3 ">
                <p className="font-bold text-lg">R$ 35.90</p>
                <button onClick={() => addToCart("Hambuguer da casa", 35.90, 1)} className="bg-red-500 hover:bg-red-800 px-3 rounded ">
                  <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <img
              src={Hambuguer4}
              alt="Hambuguer"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div>
              <p className="font-bold">Hambuguer Salada</p>
              <p className="text-sm">Pão levinho de fermentação natural, burguer 160g, queijo e maionese da casa.</p>

              <div className="flex items-center gap-2 justify-between mt-3 ">
                <p className="font-bold text-lg">R$ 15.90</p>
                <button onClick={() => addToCart("Hambuguer Salada", 15.90, 1)} className="bg-red-500 hover:bg-red-800 px-3 rounded ">
                  <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <img
              src={Hambuguer5}
              alt="Hambuguer"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div>
              <p className="font-bold">Hambuguer Salada</p>
              <p className="text-sm">Pão levinho de fermentação natural, burguer 160g, queijo e maionese da casa.</p>

              <div className="flex items-center gap-2 justify-between mt-3 ">
                <p className="font-bold text-lg">R$ 15.90</p>
                <button onClick={() => addToCart("Hambuguer Salada", 15.90, 1)} className="bg-red-500 hover:bg-red-800 px-3 rounded ">
                  <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <img
              src={Hambuguer6}
              alt="Hambuguer"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div>
              <p className="font-bold">Haburguer Triplo</p>
              <p className="text-sm">Pão levinho de fermentação natural, burguer 160g, queijo e maionese da casa.</p>

              <div className="flex items-center gap-2 justify-between mt-3 ">
                <p className="font-bold text-lg">R$ 45.90</p>
                <button onClick={() => addToCart("Haburguer Triplo", 45.90, 1)} className="bg-red-500 hover:bg-red-800 px-3 rounded ">
                  <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>

        </main>

        <div className="mx-auto max-w-7xl px-2 my-2">
          <h2 className="font-bold text-3xl">Bebidas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-7 mx-auto max-w-7xl px-2 mb-16">

          <div className="flex gap-2 w-full">
            <img
              src={Driking}
              alt="drinking"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div className="w-full">
              <p className="font-bold">Coca lata</p>

              <div className="flex items-center gap-2 justify-between mt-3 ">
                <p className="font-bold text-lg">R$ 6.00</p>
                <button onClick={() => addToCart("Coca lata", 6.00, 1)} className="bg-red-500 hover:bg-red-800 px-3 rounded ">
                  <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 w-full">
            <img
              src={Driking1}
              alt="drinking"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div className="w-full">
              <p className="font-bold">Refrigerante lata</p>

              <div className="flex items-center gap-2 justify-between mt-3 ">
                <p className="font-bold text-lg">R$ 6.00</p>
                <button onClick={() => addToCart("Refrigerante lata", 6.00, 1)} className="bg-red-500 hover:bg-red-800 px-3 rounded ">
                  <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <div onClick={closeModal} className="cart-modal bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center">
          <div onClick={handleChildClick} className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[50%] max-h-[80%] overflow-auto">
            <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>

            {cart.map((item: string | any, index: string | any) => (
              <div key={index} className="flex justify-between mb-2 flex-col">
                <p>{item.name}</p>
                <p>Preço: {item.price.toFixed(2)}</p>
                <p>Quantidade: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.name)}>Remover</button>
              </div>
            ))}
            <p className="font-bold">Total: <span>{total}</span></p>

            <p className="font-bold mt-4">Endereço de entrega:</p>
            <input
              type="text"
              placeholder="Digite seu endereço completo..."
              className="w-full border-2 p-1 rounded my-1"
            />
            <p className="text-red-500 hidden">Digite seu endereço completo</p>

            <div className="flex items-cender justify-between mt-5 w-full">
              <button onClick={closeModal}>Fechar</button>
              <button className="bg-green-500 text-white px-4 py-1 rounded ">Finalizar pedido</button>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full bg-red-500 fixed bottom-0 z-40 flex items-center justify-center py-3">
        <button onClick={ModalOpen} className="view-cart-button text-white font-bold flex items-center gap-2">
          <span>( {cart.length} ) </span>
          Veja meu carrinho
        </button>
        <FontAwesomeIcon className="text-md text-white" icon={faCartPlus} />
      </footer>
    </>
  )
}

export default App

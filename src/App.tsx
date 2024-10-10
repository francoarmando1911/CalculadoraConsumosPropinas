
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPrecentageForm from "./components/TipPrecentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {
  
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-gradient-to-r from-orange-400 to-yellow-500 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5"> 
          <h2 className="text-4xl font-black">MENÚ</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
          order={order}
          removeItem={removeItem}
          />

          <TipPrecentageForm
          setTip={setTip}
          tip={tip}
          />


          <OrderTotals
          order={order}
          tip={tip}
          placeOrder={placeOrder}
          />
        </div>

      </main>
    </>
  )
}

export default App

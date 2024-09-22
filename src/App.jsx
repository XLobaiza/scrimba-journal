import './App.css'
import Navbar from '././components/Navbar.jsx'
import Card from '././components/Card.jsx'
import data from './data.jsx'

function App() {
  const cards = data.map(item => {
    return (
          <Card
          key={item.id}
          item={item}/>
          )
  })
  return (
    <div>
      <Navbar/>
      <section>
        {cards}
      </section>
    </div>
  )
}

export default App

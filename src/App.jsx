import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProgressContainer from "./components/ProgressContainer"
import TicketsContainer from "./components/TicketsContainer"
import { toast, ToastContainer } from 'react-toastify';


function App() {
  const [tickets, setTickets] = useState([])
  const [inprogress, setInprogress] = useState([])
  const [resolved, setResolved] = useState([])

  const handleInprogress = (ticket) => {
    console.log('progress', ticket);
    const isInprogress = inprogress.find(tkt => tkt.id === ticket.id)
    if (isInprogress) {
      toast('Ticket is already In Progress')
      return;
    }
    const newInProgress = [...inprogress, ticket]
    const modifiedNewInprogress = newInProgress.map(tkt => {
      if (tkt.id === ticket.id) {
        console.log({ ...tkt, status: 'In Progress' })
        toast('Ticket is now In Progress')
        return { ...tkt, status: 'In Progress' }
      }
      return tkt;
    })


    setInprogress(modifiedNewInprogress)
  }
  const handleResolved = (ticket) => {
    console.log('resolve', ticket);
    const decreasedInProgress = inprogress.filter(tkt => tkt.id !== ticket.id)
    setInprogress(decreasedInProgress)



    const newResolved = [...resolved, ticket]
    setResolved(newResolved)
    toast.success('Ticket is now Resolved')
  }

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  return (
    <>
      <Navbar />
      <main className="py-10 bg-gray-100">
        <ProgressContainer inprogress={inprogress.length} resolved={resolved.length} />
        <TicketsContainer
          tickets={tickets}
          inprogress={inprogress}
          resolved={resolved}
          handleInprogress={handleInprogress}
          handleResolved={handleResolved}
        />
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App

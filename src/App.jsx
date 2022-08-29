import { useEffect, useState } from 'react'
import Template from './components/template'
import { FoodColor, FoodFrequency, FoodPortions, FoodStyle, Name } from './pages'
import { Container } from './layouts'
import { PaginationProvider } from "./utils/paginationContext";

const App = () => {
  const [page, setPage] = useState(0)
  const [data, setData] = useState({})
  const [formData, setFormData] = useState({})
  const [success, setSuccess] = useState(false)

  const updateData = (obj) => {
    setFormData({ ...formData, ...obj })
  }

  const nextStep = () => {
    setPage(page + 1)
  }
  const prevStep = () => {
    setPage(page - 1)
  }

  const fetchData = async () => {
    try {
      const response = await fetch('payload.json', { method: 'GET' })
      const data = await response.json()
      await setData(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  const renderPage = (page) => {
    const ComponentsList = [
      <Name setSuccess={setSuccess} success={success}/>,
      <FoodStyle/>,
      <FoodPortions/>,
      <FoodColor/>,
      <FoodFrequency/>
    ];

    return ComponentsList[page];
  }
  const providerValues = {
    updateData, pageData: data[page], nextStep, prevStep
  }
  return (<Container>
    <PaginationProvider value={providerValues}>
      <Template>
        {renderPage(page)}
      </Template>
    </PaginationProvider>
  </Container>)
}

export default App

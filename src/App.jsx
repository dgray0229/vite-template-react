import { useEffect, useState } from 'react'
import Template from './components/template'
import { FoodColor, FoodFrequency, FoodPortions, FoodStyle, Name } from './pages'
import { Container } from './layouts'

const App = () => {
  const [page, setPage] = useState(0)
  const [data, setData] = useState({})
  const [formData, setFormData] = useState({})
  const [success, setSuccess] = useState(false)
  const updateData = (obj) => {
    const currentPage = data[page].id
    setFormData({ ...formData, ...obj })
    console.log(currentPage)
    if (currentPage === 1) {
      setSuccess(true)
      setTimeout(nextStep, 2000)
    }
  }

  const nextStep = () => {
    setPage(page + 1)
    setSuccess(false)
  }
  const prevStep = () => {
    setPage(page - 1)
  }

  const fetchData = async () => {
    try {
      const response = await fetch('payload.json', { method: 'GET' })
      const data = await response.json()
      await setData(data)
      await console.log(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(data[page])
  }, [])
  const ComponentsList = [<Name updateData={updateData} pageData={data[page]} success={success}/>,
    <FoodStyle updateData={updateData} pageData={data[page]}/>,
    <FoodPortions updateData={updateData} pageData={data[page]}/>,
    <FoodColor updateData={updateData} pageData={data[page]}/>,
    <FoodFrequency updateData={updateData} pageData={data[page]}/>]

  return (<Container>
    <Template pageData={data[page]}>
      {ComponentsList[page]}
    </Template>
  </Container>)
}

export default App

import { useEffect, useState } from 'react'
import Template from './components/template'
import { FoodColor, FoodFrequency, FoodPortions, FoodStyle, Name, ThankYou } from './pages'
import { Container } from './layouts'
import { PaginationProvider } from "./utils/paginationContext";

const App = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Please enter all required fields");
  const updateData = (obj) => {
    setFormData({ ...formData, ...obj })
  }
  const getFormData = () => formData
  const checkIfFalsy = (value) => {
    if (value === undefined) return false
    if (Array.isArray(value) && value.length === 0) return false
    if (value.length === 0 || value === "") return false
    return true
  }
  const calculateProgress = (currentItem, totalItems) => Math.round((currentItem / totalItems) * 100)
  const checkFormError = (formData, message = "Please enter all required fields") => {
    const isValid = checkIfFalsy(formData)
    if (!isValid) {
      setError(true);
      setErrorMessage(message);
      return false;
    } else {
      setError(false);
      setErrorMessage(message);
      return true;
    }
  }
  const nextStep = () => {
    setPage(page + 1)
  }
  const prevStep = () => {
    setPage(page - 1)
  }
  const startOver = () => {
    setSuccess(false);
    setPage(0);
    setFormData({});
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
      <FoodFrequency/>,
      <ThankYou/>
    ];

    return ComponentsList[page];
  }
  const providerValues = {
    updateData,
    pageData: data[page],
    nextStep,
    prevStep,
    getFormData,
    checkFormError,
    error,
    errorMessage,
    completed: calculateProgress(page, data.length),
    startOver
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

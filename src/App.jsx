import Form from './components/Form'
import { useState } from 'react';
import Card from './components/Card';
import './App.css'

function App() {
  const [formData, setFormData] = useState(null);


  const handleFormSubmit = (data) => {
    setFormData(data)
  };

  return (
    <>
    <div>
      <Form onSubmit={handleFormSubmit}/>
      {formData && <Card {...formData}/>}
    </div>
        
    </>
  )
}

export default App

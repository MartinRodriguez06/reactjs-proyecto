import { useState } from "react"

const Form = ({ generarOrden }) => {

  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    validarEmail: ''
  })

  const handleOnChange = (evet) => {
    setDataForm({
      ...dataForm,
      [evet.target.name]: evet.target.value
    })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center border border-2 border-primary w-50 mt-5">
      <form className="form-group w-100" onSubmit={generarOrden}>
        <h3>Datos del comprador</h3>
        <input
          className="form-control"
          type='text'
          name='name'
          placeholder="Ingresar nombre"
          onChange={handleOnChange}
          required
          value={dataForm.name}
        />
        <input
          className="form-control"
          type='text'
          name='phone'
          placeholder="Ingresar teléfono"
          onChange={handleOnChange}
          required
          value={dataForm.phone}
        />
        <input
          className="form-control"
          type='email'
          name='email'
          placeholder="Ingresar email"
          onChange={handleOnChange}
          required
          value={dataForm.email}
        />
        <input
          className="form-control"
          type='email'
          name='validarEmail'
          placeholder="Validar el email"
          onChange={handleOnChange}
          required
          value={dataForm.validarEmail}
        />
        <button className='btn btn-success'> Generar Orden </button><br />
      </form>
    </div>
  )
}

export default Form

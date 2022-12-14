import "./formulario.css";
import { Link } from "react-router-dom";

const Formulario = ({ values, setValues, concursantes, setConcursantes }) => {
  // const fechaDeNacimiento = values.dateOfBirth;
  // const calcularEdad = (fechaDeNacimiento) => {
  //   const fechaActual = new Date();
  //   const anoActual = parseInt(fechaActual.getFullYear());
  //   const mesActual = parseInt(fechaActual.getMonth())+1;
  //   const diaActual = parseInt(fechaActual.getDate());
    
  //   const anoDeNacimiento = parseInt(String(fechaDeNacimiento).substring(0,4));
  //   const mesDeNacimiento = parseInt(String(fechaDeNacimiento).substring(5,7));
  //   const diaDeNacimiento = parseInt(String(fechaDeNacimiento).substring(8,10));
  //   let edad = anoActual - anoDeNacimiento;
  //   if(mesActual < mesDeNacimiento){
  //     edad--;
  //   }else if(mesActual === mesDeNacimiento){
  //     if(diaActual===diaDeNacimiento){
  //       edad--;
  //     }
  //   }
  //   return edad;
  // };
  // const edad = calcularEdad(fechaDeNacimiento);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setConcursantes([...concursantes, values]);
    // setValues(values.age = edad )
    console.log(values);
  };
  return (
    <div className="main">
      <div className="title">
        <h1>Universidad de Guatemala</h1>
        <h2>Evento de poesía</h2>
      </div>
      <form onSubmit={handleSubmit} className="main-content">
        <label className="main-content labels">
          Nombre Completo:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            pattern="^[a-zA-ZÀ-ÿ\s]{1,40}$"
            title="El nombre no debe contener caracteres alfanúmericos"
          />
        </label>
        <label className="main-content labels">
          No. Carné:
          <input
            type="text"
            placeholder=" Ejemplo: Ax5xx1"
            name="carnet"
            onChange={handleChange}
            pattern="\b^A[A-Za-z1-9]{4}[1,3,9]\b$"
            required
            title="La longitud del carnet debe de ser mayor a 6 caracteres, debe empezar con A, el tercer caracter debe de ser 5 y el último caracter debe ser 1, 3 o 9"
          />
        </label>
        <label className="main-content labels">
          Direccion:
          <input
            type="text"
            name="address"
            onChange={handleChange}
            required
            pattern="[a-zA-ZÀ-ÿ0-9\s]{1,40}$"
            title="Parametros invalidos"
          />
        </label>
        <label className="main-content labels">
          Genero:
          <input
            list="genero"
            name="gender"
            onChange={handleChange}
            required
            pattern="[a-zA-ZÀ-ÿ]{1,40}$"
            title="El genero no puede contener caracteres alfanúmericos"
          />
        </label>
        <datalist id="genero">
          <option value="Masculino" />
          <option value="Femenino" />
          <option value="Otro" />
        </datalist>
        <label className="main-content labels">
          Teléfono:
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            required
            pattern="[0-9\s]{8,16}$"
            title="El numero de telefono no debe tener letras y debe ser de minimo 8 digitos"
          />
        </label>
        <label className="main-content labels">
          Fecha de nacimiento:
          <input
            type="date"
            name="dateOfBirth"
            onChange={handleChange}
            required
          />
        </label>
        <label className="main-content labels">
          Carrera:
          <input
            type="text"
            name="career"
            onChange={handleChange}
            required
            pattern="[a-zA-ZÀ-ÿ\s]{1,40}"
            title="La carrera no debe llevar caracteres alfanúmericos"
          />
        </label>
        <label className="main-content labels">
          Género de poesía:
          <input
            list="generoDePoesia"
            name="poetryGender"
            onChange={handleChange}
            required
            pattern="[a-zA-ZÀ-ÿ\s]{1,40}"
            title="El género de la poesía no debe contener caracteres alfanumericos"
          />
        </label>
        <datalist id="generoDePoesia">
          <option value="Lírica" />
          <option value="Épica" />
          <option value="Dramatica" />
        </datalist>
        <button className="button-submit">Enviar</button>
      </form>
      <div className="link">
        <Link to="concursantes">⏩Concursantes</Link>
      </div>
    </div>
  );
};

export default Formulario;

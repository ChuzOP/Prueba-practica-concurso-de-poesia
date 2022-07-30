import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "../formulario/Formulario";
import Concursantes from "../concursantes/Concursantes";

const Main = () => {
  const [concursantes, setConcursantes] = useState([]);
  const [values, setValues] = useState({
    id: new Date(),
    carnet: "",
    name: "",
    address: "",
    gender: "",
    phoneNumber: "",
    dateOfBirth: "",
    career: "",
    poetryGender: "",
    age: "",
    poetryDay: "",
    asignDay: new Date()
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Formulario
              values={values}
              setValues={setValues}
              concursantes={concursantes}
              setConcursantes={setConcursantes}
            />
          }
        />
        <Route
          path="concursantes"
          element={
            <Concursantes
              concursantes={concursantes}
              setConcursantes={setConcursantes}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;

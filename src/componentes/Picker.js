
import { useState } from "react";

const Picker = ({ defaultValue }) => {

  const [value, setValue] = useState(defaultValue);

  // Función manejadora del evento click en el button más
  const handlePlus = () => {
    setValue(value + 1);
 
  };


  // Función manejadora del evento click en el button "reset"
  const handleReset = () => {
    setValue(defaultValue);
  };

  // Devuelvo el JSX de componente
  return (
    <div>
      <span>{value}</span>
      <button className="unoMas" onClick={handlePlus}>OTRO DÍA SUPERADO </button>
      <button  className="reset" onClick={handleReset}>LLAMA A LA AMBULANCIA 🚑</button>
    </div>
  );
};

export default Picker;


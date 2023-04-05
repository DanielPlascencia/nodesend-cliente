import { useContext, useState } from "react";
import appContext from "context/app/appContext";

const Formulario = () => {
  // Context de la app.
  const AppContext = useContext(appContext);
  const { agregarPassword, agregarDescargas } = AppContext;

  const [tienePassword, setTienePassword] = useState(false);

  return (
    <div className="w-full mt-20">
      <div>
        <label htmlFor="descargas" className="text-lg text-gray-800">
          Eliminar tras:
        </label>

        <select
          name="descargas"
          id="descargas"
          className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
          onChange={(e) => agregarDescargas(parseInt(e.target.value))}
        >
          <option value="" selected disabled>
            -- Seleccione --
          </option>
          <option value="1">1 Descarga</option>
          <option value="5">5 Descarga</option>
          <option value="10">10 Descarga</option>
          <option value="20">20 Descarga</option>
        </select>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <label htmlFor="" className="text-lg text-gray-800 mr-2">
            Proteger con Contraseña
          </label>
          <input
            type="checkbox"
            onChange={() => setTienePassword(!tienePassword)}
          />
        </div>
        {tienePassword ? (
          <input
            type="password"
            className="appearence-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
            onChange={(e) => agregarPassword(e.target.value)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Formulario;

import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import authContext from "context/auth/authContext";
import appContext from "context/app/appContext";
import { useRouter } from "next/router";

function Header() {
  // Routing.
  const router = useRouter();

  // Extraer el usuario autenticado del storage.
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext;

  // Extraer el context de la aplicacion.
  const AppContext = useContext(appContext);
  const { limpiarState } = AppContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const redireccionar = () => {
    router.push("/");
    limpiarState();
  };

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Image
        src="/logo.svg"
        alt="React NodeSend Logo"
        width="200"
        height="100"
        className="w-64 mb-8 md:mb-0 cursor-pointer"
        onClick={() => redireccionar()}
      />

      <div className="">
        {usuario ? (
          <div className="flex items-center">
            <p className="mr-2">Hola {usuario.nombre}</p>
            <button
              type="button"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesion
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2"
            >
              Iniciar Sesion
            </Link>

            <Link
              href="/crear-cuenta"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
            >
              Crear Una Cuenta
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

//<div className="w-64 mb-8 md:mb-0">

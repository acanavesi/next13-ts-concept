import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Csr = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  //si aca no se pone el layout, la pagina solo muestra estos textos y se pierde el menu superior
  if (isLoading) {
    return (
      <Layout>
        <p>Cargando...</p>
      </Layout>
    );
  }
  if (data.length === 0 || JSON.stringify(data) === "{}") {
    return (
      <Layout>
        <p>No hay datos para mostrar ..</p>
      </Layout>
    );
  }

  return (
    <div>
      <Layout>
        <h1 className="text-3xl py-2">CSR</h1>
        <p>
          client side rendering - se manda el HTML y el js al cliente y ahi se
          hacen las llamadas al API.
        </p>
        <p>
          Cuando se hace el build de la página (es decir cuando de pone el
          código en el servidor web), se genera el HTML por unica vez. Ese HTML
          contiene el js que llama al API desde el cliente
        </p>
        <p>1 - se llama a la URL desde el cliente</p>
        <p>2 - se envia el HTML al cliente</p>
        <p>3 - el cliente carga el HTML y ejecuta el mismo el llamado al API</p>
        <p>
          Nota: Cada vez que el clliente llama a la url, se envia el HTML con
          los fectch incrustados y el cliente llama al API. Esto implica que
          desde el cliente se sabe el llamado al API y los datos que devuelve.
        </p>
        <hr />

        <p className="p-2">Este es el codigo de la página</p>
        <code className="text-white">
          <pre className="bg-black">{pagina}</pre>
        </code>
        <p className="py-2">Resultado de la llamada al api</p>
        <hr />
        {data.map((item: any) => (
          <div key={item.id} className="py-2">
            <h2 className="text-2xl">Titulo: {item.title}</h2>
            <p>ID: {item.id}</p>
            <p>Cuerpo: {item.body}</p>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export default Csr;



const pagina = `
import { useEffect, useState } from "react";
const Csr = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  //si aca no se pone el layout, la pagina solo muestra estos textos y se pierde el menu superior
  if (isLoading) {
    return (
      <Layout>
        <p>Cargando...</p>
      </Layout>
    );
  };
  if (data.length === 0 || JSON.stringify(data) === "{}") {
   return (
     <Layout>
       <p>No hay datos para mostrar ..</p>
     </Layout>
   );
  }

  return (
    <div>
      <Layout>
        {data.map((item: any) => (
          <div key={item.id} className="py-2">
            <h2 className="text-2xl">Titulo: {item.title}</h2>
            <p>ID: {item.id}</p>
            <p>Cuerpo: {item.body}</p>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export default Csr;`;

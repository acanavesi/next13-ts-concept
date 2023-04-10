import Layout from "../components/Layout";

const Ssg = ({ data }: any) => {
  //   console.log(data);
  return (
    <div>
      <Layout>
        <h1 className="text-3xl py-2">SSG</h1>
        <p>
          Static Site Generation - se genera todo el sitio de forma estética en
          el server a la hora de deployar - tal como si fuera una pagina
          estática
        </p>
        <p>
          Cuando se hace el build de la página (es decir cuando de pone el
          código en el servidor web), se genera el HTML por unica vez de la
          siguiente manera:
        </p>
        <p>1 - se ejecuta la funcion getStaticProps que llama al api </p>
        <p>2 - el resultado se pasa al componente (pagina) </p>
        <p>3 - el server arma el HTML</p>
        <p>
          4 - se guarda para siempre ese HTML y cada vez que un cliente solicita
          la pagina, se le envia el HTML
        </p>
        <p>
          Nota: Nunca mas se llama a la API, por lo que si los datos cambiaron,
          no se reflejan en la pagina. Si se quiere actualizar los datos, hay
          que ejecutar nuevamente el build en el servidor web.
        </p>
        <hr />
        <p className="p-2">Este es el codigo de la funcion</p>
        <code className="text-white">
          <pre className="bg-black">{funcion}</pre>
        </code>

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

export default Ssg;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // console.log(res)
  const data = await res.json();
  //   console.log(data);
  return {
    props: {
      data,
    },
  };
}

const funcion = `export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // console.log(res)
  const data = await res.json();
  //   console.log(data);
  return {
    props: {
      data,
    },
  };
}`;

const pagina = `const Ssg = ({ data }: any) => {
  return (
    <div>
        {data.map((item: any) => (
          <div key={item.id}>
            <h2> Titulo: {item.title}</h2>
            <p> Cuerpo: {item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Ssg;`;

import Layout from "../components/Layout";

const Isr = ({ data }: any) => {
  //   console.log(data);
  return (
    <div>
      <Layout>
        <h1 className="text-3xl py-2">ISR</h1>
        <p>
          Incremental Static Regeneration .. ideam a SSG pero se le pasa un
          parametro para que se refresque en el server.
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
          4 - se guarda ese HTML y cada vez que un cliente solicita la pagina,
          se verifica el parametro revalidate de la funcion:
        </p>
        <p>- Si el tiempo no se supero, se envia el HTML que se tiene</p>
        <p>
          - Si el tiempo se supero, se genera el HTML en el server (llamando a
          la API) y se envia al cliente
        </p>
        <p>
          Nota: El HTML queda en el server hasta cuando se supera el tiempo y
          ademas hay una nueva solicitud de la pagina.
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

export default Isr;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // console.log(res)
  const data = await res.json();
  //   console.log(data);
  return {
    props: {
      data,
    },
    revalidate: 3600, // In seconds
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
     revalidate: 3600, // In seconds
  }
}`;

const pagina = `const Isr = ({ data }: any) => {
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

export default Isr;`;

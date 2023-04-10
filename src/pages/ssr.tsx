import React from "react";
import Layout from "../components/Layout";



const Ssr = ({ data }: any) => {
  //   console.log(data);
  return (
    <div>
      <Layout>
        <h1 className="text-3xl py-2">SSR</h1>
        <p>
          Server Side rendering - se porcesa en el server y se le manda la
          pagina al cliente
        </p>
        <p>1 - se llama a la URL desde el cliente</p>
        <p>2 - se ejecuta la funcion getServerSideProps que llama al api </p>
        <p>3 - el resultado se pasa al componente (pagina) </p>
        <p>4 - el server arma el HTML</p>
        <p>5 - se envia el HTML al cliente</p>
        <p>
          Nota: Cada vez que el clliente llama a la url, el proceso se ejecuta
          nuevamnete desde el paso 1
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

export default Ssr;

// import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
export async function getServerSideProps() {
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

const funcion = `export async function getServerSideProps() {
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

const pagina = `const Ssr = ({ data }: any) => {
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

export default Ssr;`;
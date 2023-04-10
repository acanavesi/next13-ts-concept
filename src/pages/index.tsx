import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout>
        <h3 className="font-bold">SSR, SSG, ISR y CSR</h3>
        <p>
          Por defecto, cuando creamos una pagina, sin ningún fetch, next lo crea
          con SSG (esto es cuando se genera el build)
        </p>
        <p>Pre-rendering se hace con SSR o con SSG</p>
        <div className="my-10">
          <h2 className="font-bold">SSR</h2>
          <p>
            Static Site Generation - se genera todo el sitio de forma estética
            en el server a la hora de deployar - tal como si fuera una pagina
            estática
          </p>
          <p>
            Genera el sitio web (HTML) en el servidor en respuesta a la
            navegación. Esto evita más peticiones cuando estamos recibiendo
            contenido en el cliente
          </p>
          <p className="p-3">Ventajas:</p>
          <p>
            Sitios amigables con dispositivos que tienen CPUs no tan potentes o
            dispositivos antiguos. Es más fácil que los navegadores indexen tu
            sitio web. Esto ayuda a posicionar tu página en los buscadores
          </p>
          <p className="p-3">Desventajas</p>
          <p>
            Generar páginas en el servidor necesita tiempo. Por lo tanto produce
            un TTFB más lento. Incrementa el costo de los servidores Problemas
            de compatibilidad con dependencias de terceros.
          </p>
        </div>
        <div className="my-10">
          <h2 className="font-bold">SSG</h2>
          <p>
            Static Site Generation - se genera todo el sitio de forma estética
            en el server a la hora de deployar - tal como si fuera una pagina
            estática
          </p>
          <p>
            Es una técnica que sucede al momento de hacer el build de una
            aplicación. Ofrece un FCP y TTI más rápido, asumiendo que la
            cantidad de Javascript es limitada. Cada página produce un html
            diferente.
          </p>
          <p className="p-3">Ventajas:</p>
          <p>
            Sitios web mas rapidos Igual que el SSR, nos brinda el beneficio del
            SEO Menos vulnerables a ataques (hacking)
          </p>
          <p className="p-3">Desventajas</p>
          <p>
            Si el javascript y/o HTML crecen, los builds son más lentos Si
            cambias cualquier cosa, hay que hacer un re-deploy. Ya que el
            contenido es estático
          </p>
        </div>
        <div className="my-10">
          <h2 className="font-bold">ISR</h2>
          <p>
            Incremental Static Regeneration .. ideam a SSG pero se le pasa un
            parametro para que se refresque en el server.
          </p>
          <p>
            Mismos comentarios de SSG, pero con la ventaja que la pagina se
            reconstruye cada vez que se supera el tiempo
          </p>
        </div>
        <div className="my-10">
          <h2 className="font-bold">CSR</h2>
          <p>
            client side rendering - se manda el HTML y el js al cliente y ahi se
            hacen las llamadas al API.
          </p>
          <p>
            Esta técnica renderiza las páginas directamente en el browser
            utilizando Javascript. Data fetching, routing son manejados dentro
            del browser.
          </p>
          <p className="p-3">Ventajas:</p>
          <p>
            Suelen tener costos más bajos de hosting. La navegación es más
            fluida, debido a que todo se encuentra listo en el cliente, no es
            necesario hacer una petición al servidor. El despliegue es más fácil
          </p>
          <p className="p-3">Desventajas</p>
          <p>
            El bundle tiende a crecer conforme el código se incrementa, lo cual
            nos obliga en un futuro a hacer code splitting manual para evitar
            performance issues. SEO pobre La experiencia en dispositivos no tan
            potentes puede ser una pesadilla
          </p>
        </div>

        <p className="p-2">Asi es el la salida cuando se crea el build</p>
        <code className="text-white">
          <pre className="bg-black">{buildCode}</pre>
        </code>
        <p className="py-2">Resultado de la llamada al api</p>
      </Layout>
    </div>
  );
}

const buildCode = `Route (pages)
                                          Size     First Load JS
┌ ○ /                                      1.74 kB        77.3 kB
├ ○ /404                                   534 B          76.1 kB
├ ○ /csr                                   1.55 kB        77.1 kB
├ ○ /index_ori                             5.07 kB        78.5 kB
├   └ css/a6086129adba8575.css             577 B
├ ● /isr (ISR: 3600 Seconds)               1.37 kB        76.9 kB
├ ● /ssg                                   1.34 kB        76.9 kB
└ λ /ssr                                   1.17 kB        76.7 kB
+ First Load JS shared by all              77 kB
  ├ chunks/framework-cda2f1305c3d9424.js   45.2 kB
  ├ chunks/main-4dcb7f9b52833aba.js        27.2 kB
  ├ chunks/pages/_app-5fbdfbcdfb555d2f.js  296 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/ad681779520cf4e6.css               3.53 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)`;

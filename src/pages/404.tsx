import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex ">
      <Layout><div>404 .. Pagina no encontrada</div></Layout>
    </main>
  )
}

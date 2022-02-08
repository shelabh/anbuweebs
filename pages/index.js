import Head from "next/head";
import Header from "./Components/Header/Header"
import Hero from './Components/Hero/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AnbuWeebs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
    </div>
  );
}
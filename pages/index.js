import Head from "next/head";
import Header from "./Components/Header/Header"

export default function Home() {
  return (
    <div>
      <Head>
        <title>AnbuWeebs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  );
}
import Head from "next/head";
import Left from "../components/Left";
import Right from "../components/Right";

export default function Home() {
 
  return (
    <div className=" bg-black flex flex-row w-full h-full">
      <Head>
        <title>Anbuweebs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Left/>
      <Right/>
    </div>
  );
}

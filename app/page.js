"use client";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useClient } from "next/client";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loris Ohr | HTL-Dornbirn</title>
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}

"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home(){
  const [nome, alteraNome] = useState("NOME");

  function enviarformulario(e){
    e.preventDefault()
    if (nome == "lula"){
      alert("Faça o L")
    }else{
      alert("????")
    }
  }

  return(
    <div>
      <Link href={"teste"} >IR para pagina de testes</Link>
      <h1>Revisão</h1>
      <p>TESTESTESTESTESTESTESTESTESTES</p>

    <form onSubmit={(e)=> enviarformulario(e)} >
      <p>{nome}</p>
      <label>
        Digite
        <input onChange={(e)=> alteraNome(e.target.value)} />
      </label>
      <button>Enviar</button>
    </form>


    </div>
  )
}
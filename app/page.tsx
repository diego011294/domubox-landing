"use client";
import Galeria from "@/components/galeria/Galeria";
import Header from "@/components/header/Header";
import Materiales from "@/components/materiales/Materiales";
import ModalPresupuesto from "@/components/modalpresupuesto/ModalPresupuesto";
import Modelos from "@/components/modelos/Modelos";
import Whyus from "@/components/whyus/Whyus";
import { useState } from "react";



export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
        <header>
          <Header openModal={() => setModalOpen(true)}/>
        </header>
        <section>
          <Modelos openModal={() => setModalOpen(true)} />
        </section>
        <section>
          <Galeria/>
        </section>
        <section>
          <Materiales />
        </section>
        <section>
          <Whyus/>
        </section>

        {/* Aquí se inserta el modal */}
      <ModalPresupuesto 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </main>
  );
}

export default function AvisoLegal() {
  return (
    <main className="text-gray-800">
      {/* CABECERA VERDE FULL WIDTH */}
      <div className="w-full bg-brand pt-32 md:pt-36 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            Aviso Legal
          </h1>
        </div>
      </div>

      {/* CONTENIDO LEGAL */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8 text-sm md:text-base leading-relaxed">
        <p>
          En cumplimiento con lo dispuesto en la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSI-CE), se pone a disposición de los usuarios la siguiente información
          general sobre el titular del presente sitio web.
        </p>

        {/* DATOS IDENTIFICATIVOS */}
        <div className="border border-gray-200 rounded-md p-6 bg-gray-50">
          <h2 className="text-lg font-medium mb-4">
            Datos identificativos
          </h2>

          <ul className="space-y-2">
            <li><strong>Razón social:</strong> DOMUBOXIMPORT S.L.</li>
            <li><strong>CIF:</strong> B22906374</li>
            <li>
              <strong>Domicilio fiscal:</strong><br />
              PGIN. POCOMACO AV 1, NUM 2<br />
              PLANTA 0, PUERTA A<br />
              15190 A CORUÑA (A) – ESPAÑA
            </li>
            <li><strong>Delegación AEAT:</strong> 15601 A CORUÑA</li>
          </ul>
        </div>

        {/* OBJETO */}
        <h2 className="text-xl font-semibold mt-10">
          Objeto del sitio web
        </h2>

        <p>
          El presente sitio web tiene carácter meramente informativo y corporativo,
          y su finalidad es proporcionar información sobre los servicios, productos,
          proyectos y actividades desarrolladas por DOMUBOXIMPORT S.L.
        </p>

        <p>
          En ningún caso la información contenida en este sitio web constituye una
          oferta comercial vinculante ni un medio de contratación electrónica.
        </p>

        {/* CONDICIONES DE USO */}
        <h2 className="text-xl font-semibold mt-10">
          Condiciones de uso
        </h2>

        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario, lo que
          implica la aceptación plena y sin reservas de todas las disposiciones
          incluidas en el presente Aviso Legal desde el mismo momento en que se
          accede al sitio web.
        </p>

        <p>
          El usuario se compromete a hacer un uso adecuado del sitio web y de sus
          contenidos, de conformidad con la legislación vigente, la buena fe, el
          orden público y el presente Aviso Legal, absteniéndose de utilizarlo con
          fines ilícitos o lesivos para los intereses de terceros.
        </p>

        {/* PROPIEDAD INTELECTUAL */}
        <h2 className="text-xl font-semibold mt-10">
          Propiedad intelectual e industrial
        </h2>

        <p>
          Todos los contenidos del sitio web, entendiendo por estos, a título
          enunciativo pero no limitativo, los textos, imágenes, diseños, logotipos,
          iconos, software, nombres comerciales, marcas o cualquier otro signo
          susceptible de utilización industrial y comercial, son titularidad de
          DOMUBOXIMPORT S.L. o de terceros que han autorizado su uso.
        </p>

        <p>
          Queda expresamente prohibida la reproducción, distribución, comunicación
          pública, transformación o cualquier otra forma de explotación, total o
          parcial, de los contenidos del sitio web sin la autorización expresa y
          por escrito del titular de los derechos correspondientes.
        </p>

        {/* RESPONSABILIDAD */}
        <h2 className="text-xl font-semibold mt-10">
          Responsabilidad
        </h2>

        <p>
          DOMUBOXIMPORT S.L. no se hace responsable de los daños o perjuicios de
          cualquier naturaleza que pudieran derivarse del uso del sitio web, ni de
          la falta de disponibilidad, mantenimiento o continuidad del mismo.
        </p>

        <p>
          Asimismo, no se responsabiliza de los posibles errores u omisiones en los
          contenidos ni del uso que los usuarios puedan hacer de la información
          publicada.
        </p>

        {/* LEGISLACIÓN */}
        <h2 className="text-xl font-semibold mt-10">
          Legislación aplicable y jurisdicción
        </h2>

        <p>
          La relación entre el titular del sitio web y el usuario se regirá por la
          normativa española vigente. Para la resolución de cualquier controversia
          que pudiera derivarse del acceso o uso del sitio web, ambas partes se
          someterán a los Juzgados y Tribunales que resulten competentes conforme a
          derecho.
        </p>
      </section>
    </main>
  )
}

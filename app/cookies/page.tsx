export default function PoliticaCookies() {
  return (
    <main className="text-gray-800">
      {/* CABECERA VERDE FULL WIDTH */}
      <div className="w-full bg-brand pt-32 md:pt-36 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            Política de Cookies
          </h1>
        </div>
      </div>

      {/* CONTENIDO */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8 text-sm md:text-base leading-relaxed">
        <p>
          DOMUBOXIMPORT S.L. utiliza cookies propias y de terceros con el fin de mejorar la experiencia del usuario, analizar el tráfico del sitio web y personalizar contenidos. El uso de cookies se realiza de conformidad con la normativa vigente en materia de protección de datos, incluyendo el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
        </p>

        {/* RESPONSABLE */}
        <div className="border border-gray-200 rounded-md p-6 bg-gray-50">
          <h2 className="text-lg font-medium mb-4">
            Responsable del tratamiento
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
          </ul>
        </div>

        {/* QUÉ COOKIES USAMOS */}
        <h2 className="text-xl font-semibold mt-10">
          Tipos de cookies utilizadas
        </h2>

        <p>
          En DOMUBOXIMPORT S.L. utilizamos principalmente los siguientes tipos de cookies:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Cookies técnicas:</strong> necesarias para el correcto funcionamiento del sitio web.
          </li>
          <li>
            <strong>Cookies de análisis:</strong> permiten conocer el comportamiento de los usuarios en nuestra web para mejorarla. Para ello utilizamos Google Analytics.
          </li>
        </ul>

        {/* FINALIDAD */}
        <h2 className="text-xl font-semibold mt-10">
          Finalidad de las cookies
        </h2>

        <p>
          Las cookies de análisis tienen como finalidad obtener información estadística sobre la navegación de los usuarios, como páginas visitadas, duración de la visita y rutas de navegación, para optimizar la experiencia de uso y mejorar nuestros servicios.
        </p>

        {/* BASE LEGAL */}
        <h2 className="text-xl font-semibold mt-10">
          Base legal
        </h2>

        <p>
          La base legal para el uso de cookies analíticas es el consentimiento expreso del usuario, otorgado mediante la aceptación del aviso de cookies al acceder al sitio web.
        </p>

        {/* GESTIÓN Y ELIMINACIÓN */}
        <h2 className="text-xl font-semibold mt-10">
          Gestión y eliminación de cookies
        </h2>

        <p>
          El usuario puede configurar su navegador para aceptar o rechazar cookies, así como eliminarlas en cualquier momento. La configuración de los navegadores más comunes se puede encontrar en los siguientes enlaces:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Safari</li>
          <li>Microsoft Edge</li>
        </ul>

        <p>
          Cabe destacar que la desactivación de algunas cookies puede afectar al correcto funcionamiento de ciertas secciones del sitio web.
        </p>

        {/* CAMBIOS */}
        <h2 className="text-xl font-semibold mt-10">
          Modificaciones de la política de cookies
        </h2>

        <p>
          DOMUBOXIMPORT S.L. se reserva el derecho a modificar esta Política de Cookies para adaptarla a novedades legislativas o jurisprudenciales, así como a cambios en los servicios prestados. Cualquier cambio será publicado en esta misma página.
        </p>
      </section>
    </main>
  )
}

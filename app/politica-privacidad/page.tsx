export default function PoliticaPrivacidad() {
  return (
    <main className="text-gray-800">
      {/* CABECERA VERDE FULL WIDTH */}
      <div className="w-full bg-brand pt-32 md:pt-36 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            Política de Privacidad
          </h1>
        </div>
      </div>

      {/* CONTENIDO */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8 text-sm md:text-base leading-relaxed">
        <p>
          DOMUBOXIMPORT S.L. se compromete a proteger la privacidad de los usuarios
          y a garantizar el cumplimiento de la normativa vigente en materia de
          protección de datos personales, en particular el Reglamento (UE) 2016/679
          del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y la
          Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los
          derechos digitales (LOPDGDD).
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

        {/* DATOS RECOGIDOS */}
        <h2 className="text-xl font-semibold mt-10">
          Datos personales recogidos
        </h2>

        <p>
          A través de los formularios disponibles en el sitio web, DOMUBOXIMPORT
          S.L. puede recoger datos personales identificativos, tales como nombre,
          apellidos, dirección de correo electrónico, número de teléfono u otros
          datos que el usuario facilite de manera voluntaria.
        </p>

        <p>
          Los datos personales solicitados son los estrictamente necesarios para
          atender las consultas realizadas por los usuarios y para poder ponerse
          en contacto con ellos con el fin de ampliar información sobre las casas
          modulares, servicios y soluciones ofrecidas por la empresa.
        </p>

        {/* FINALIDAD */}
        <h2 className="text-xl font-semibold mt-10">
          Finalidad del tratamiento
        </h2>

        <p>
          Los datos personales proporcionados por los usuarios serán tratados con
          las siguientes finalidades:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Atender solicitudes de información realizadas a través de los formularios.</li>
          <li>Contactar con los usuarios para ampliar información sobre casas modulares y servicios ofrecidos.</li>
          <li>Gestionar comunicaciones relacionadas con las consultas recibidas.</li>
        </ul>

        <p>
          En ningún caso los datos personales serán utilizados para finalidades
          distintas de las descritas sin el consentimiento previo del usuario.
        </p>

        {/* BASE LEGAL */}
        <h2 className="text-xl font-semibold mt-10">
          Legitimación para el tratamiento
        </h2>

        <p>
          La base legal para el tratamiento de los datos personales es el
          consentimiento expreso del usuario, otorgado mediante la aceptación de
          la presente Política de Privacidad y el envío voluntario de los
          formularios disponibles en el sitio web.
        </p>

        {/* CONSERVACIÓN */}
        <h2 className="text-xl font-semibold mt-10">
          Conservación de los datos
        </h2>

        <p>
          Los datos personales se conservarán durante el tiempo estrictamente
          necesario para atender la solicitud del usuario y mientras exista un
          interés mutuo para mantener la comunicación. Una vez finalizada dicha
          relación, los datos serán eliminados conforme a la normativa vigente.
        </p>

        {/* CESIONES */}
        <h2 className="text-xl font-semibold mt-10">
          Cesión de datos a terceros
        </h2>

        <p>
          DOMUBOXIMPORT S.L. no cederá los datos personales a terceros, salvo
          obligación legal o cuando sea estrictamente necesario para la prestación
          del servicio solicitado.
        </p>

        {/* DERECHOS */}
        <h2 className="text-xl font-semibold mt-10">
          Derechos de los usuarios
        </h2>

        <p>
          El usuario tiene derecho a acceder a sus datos personales, así como a
          solicitar la rectificación de los datos inexactos o, en su caso, su
          supresión, cuando, entre otros motivos, los datos ya no sean necesarios
          para los fines que fueron recogidos.
        </p>

        <p>
          Asimismo, el usuario podrá solicitar la limitación del tratamiento de
          sus datos, oponerse al mismo, así como ejercer el derecho a la
          portabilidad de los datos, en los términos previstos en la normativa
          vigente.
        </p>

        <p>
          Para el ejercicio de estos derechos, el usuario puede dirigirse por
          escrito a DOMUBOXIMPORT S.L. en el domicilio indicado anteriormente,
          acompañando copia de un documento acreditativo de su identidad.
        </p>

        {/* SEGURIDAD */}
        <h2 className="text-xl font-semibold mt-10">
          Medidas de seguridad
        </h2>

        <p>
          DOMUBOXIMPORT S.L. adopta las medidas técnicas y organizativas necesarias
          para garantizar la seguridad de los datos personales y evitar su
          alteración, pérdida, tratamiento o acceso no autorizado, teniendo en
          cuenta el estado de la tecnología, la naturaleza de los datos y los
          riesgos a los que están expuestos.
        </p>

        {/* CAMBIOS */}
        <h2 className="text-xl font-semibold mt-10">
          Modificaciones de la política de privacidad
        </h2>

        <p>
          DOMUBOXIMPORT S.L. se reserva el derecho a modificar la presente Política
          de Privacidad para adaptarla a novedades legislativas o jurisprudenciales.
          En dichos casos, se anunciarán los cambios introducidos en esta página.
        </p>
      </section>
    </main>
  )
}

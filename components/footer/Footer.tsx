import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[url('/img/fondo-footer.webp')] bg-cover bg-center bg-no-repeat text-white py-20 text-center w-full px-4">
      <div className="flex flex-col-reverse md:flex-col justify-center items-center text-sm max-w-[1300px] mx-auto">
        <div className="font-dmsans text-[14px] text-gray-300 flex flex-col-reverse md:flex-row justify-between items-center pt-5 mt-10 border-t-1 md:border-b-1 md:border-t-0 md:mb-5 md:pb-2 gap-5 border-separator w-full">
          <p>&copy; {new Date().getFullYear()} DOMUBOX IMPORT.</p>
          <div className="flex flex-wrap justify-center space-x-5 tracking-widest">
            <Link href="/politica-privacidad">Política de privacidad</Link>
            <Link href="/cookies">Política de cookies</Link>
            <Link href="/aviso-legal">Aviso legal</Link>
          </div>
        </div>
        <img src="/img/logo-footer.svg" alt="logo domubox" className="w-full" />
      </div>
      
    </footer>
  );
}

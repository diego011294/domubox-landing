import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[url('/img/fondo-footer.jpg')] bg-cover bg-center bg-no-repeat text-white py-20 text-center w-full mx-auto">
      <div className="flex flex-col-reverse md:flex-col justify-center items-center text-sm w-full xl:max-w-[1720px] px-5 sm:px-6 md:px-10 lg:px-[125px] mx-auto">
        <div className="font-lexend text-[14px] tracking-widest text-gray-300 flex flex-col-reverse md:flex-row justify-between items-center pt-5 mt-10 border-t-1 md:border-b-1 md:border-t-0 md:mb-5 md:pb-2 gap-5 border-separator w-full">
          <p>&copy; {new Date().getFullYear()} DOMUBOX IMPORT.</p>
          <div className="flex flex-wrap justify-center space-x-5 tracking-widest font-bold">
            <Link href="#">Política de privacidad</Link>
            <Link href="#">Condiciones de uso</Link>
            <Link href="#">Aviso legal</Link>
          </div>
        </div>
        <img src="/img/logo-footer.svg" alt="logo domubox" className="w-full" />
      </div>
      
    </footer>
  );
}

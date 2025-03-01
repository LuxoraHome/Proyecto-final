import { Montserrat_Alternates } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const fount = Montserrat_Alternates({ subsets: ["latin"], weight: ['500', '700'] });

function CustomNotFound() {
    return (
        <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
            <div className="text-center px-5 mx-5">
                <h1 className={`${fount.className} antialiased text-9xl`}>404</h1>
                <p className="font-semibold text-xl">Not Found, we are sorry</p>
                <p className="font-light mb-4">
                    <span>You can go back to </span>
                    <Link href="/" className="font-normal hover:underline transition-all">Home</Link>
                </p>
            </div>
            <div className="px-5 mx-5">
                <Image 
                    src="/assets/carga.gif"
                    alt="404"
                    width={550}
                    height={550}
                />
            </div>
        </div>
    );
}

export default CustomNotFound;
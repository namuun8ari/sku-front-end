import "./globals.css";

import { Inter } from "next/font/google";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaraaBurtgel from "./BaraaBurtgel/page";
import Change from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="text-slate-700 min-h-screen flex">
            <div className="flex-none bg-slate-200">
            </div>
            <div className="grow">
              <div className="bg-slate-100 border-b border-slate-200 p-3 flex justify-between">
                <div className="font-bold">
                  <Change/>
                </div>
                <div className="flex gap-5">
                <select 
                className="hover:text-green-700 text-base mr-4" 
                name="Лист"> 
                <option value="GoMart">GoMart</option>
                <option value="Mind Plus">Mind Plus</option>
                <option value="Ebazaar">Ebazaar</option>
                <option value="Бүгд">Бүгд</option>
                </select>

                <a
                    href="#"
                    className="hover:text-green-400 text-base mr-4"
                    title="Нууц үг солих"
                  >Нууц үг солих
                  </a>

                  <a
                    href="#"
                    className="hover:text-red-500 text-base"
                    title="Системээс гарах"
                  >
                    <FontAwesomeIcon
                      height={20}
                      icon={faArrowRightFromBracket}
                    />
                  </a>
                 
                </div>
              </div>
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}

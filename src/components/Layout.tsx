"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import {Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button} from "@nextui-org/react";


export default function Change() {
   const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ul className="">
        <Link href="/BaraaBurtgel" className="mr-4">Бараа бүртгэл</Link>
        <Link href="/Hereglegch" className="mr-4">Хэрэглэгч</Link>
        <Link href="/LavlahSan"  className="hover:text-green-700 text-base " ></Link>

        <Dropdown >
          <DropdownTrigger >
            <Button >Лавлах сан</Button>
          </DropdownTrigger>
         <DropdownMenu className="flex flex-col text-sm bg-pink-400 text-white font-bold border-white rounded-md p-1" aria-label="Link Actions" >
          <DropdownItem key="Бүлэг" href="/Buleg" >
            Бүлэг
          </DropdownItem>
          <DropdownItem key="Бүлгийн төрөл" href="/BulgiinTurul">
          Бүлгийн төрөл
          </DropdownItem>
          <DropdownItem key="Хэмжих нэгж" href="/HemjihNegj">
          Хэмжих нэгж
          </DropdownItem>
          <DropdownItem key="Нэгдсэн ангилал" href="/NegdsenAngilal">
          Нэгдсэн ангилал
          </DropdownItem>
        </DropdownMenu>
    </Dropdown>

      
        <Link href="/Niiluulegch" className="ml-4">Нийлүүлэгч</Link>
      </ul>
    </div>
  );
}

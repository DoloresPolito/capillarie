"use client";

import Link from "next/link";


export default function StyledLink({children, link}) {
  
  return (
   
          <Link href={link} style={{textDecoration:"none", color:"black"}}>
         {children}
          </Link>
       
  );
}

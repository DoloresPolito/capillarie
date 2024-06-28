"use client";

import Link from "next/link";


export default function StyledLink({children, link, target}) {
  
  return (
   
          <Link href={link} style={{textDecoration:"none", color:"black"}} target={target}>
         {children}
          </Link>
       
  );
}

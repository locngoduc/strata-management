"use client";
import { useEffect } from "react";

export default function Pricing() {
 useEffect(() => {
  fetch("/api/pricing", { method: "GET" });
 }, []);

 return (
  <>
   <h1>Pricing</h1>
  </>
 );
}

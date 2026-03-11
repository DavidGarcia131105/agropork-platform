"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {

  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      console.log(data);
      console.log(error);
    };

    test();
  }, []);

  return (
    <main>
      <h1>Agropork Platform</h1>
    </main>
  );
}
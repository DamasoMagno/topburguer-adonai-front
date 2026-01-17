"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [select, setSelect] = useState("all");

  return (
    <div className="w-full p-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h3>Monitor de Pedidos</h3>
          <p>Gestão operacional em tempo real.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex gap-1 p-1 bg-secondary rounded-md"
        >
          <Button
            variant={"ghost"}
            className={clsx(
              "rounded-md px-4 py-2 text-black text-sm cursor-pointer",
              select === "all" && "bg-white"
            )}
            onClick={() => {
              setSelect("all");
            }}
          >
            Todos
          </Button>
          <Button
            variant={"ghost"}
            className={clsx(
              "rounded-md px-4 py-2 text-black text-sm cursor-pointer",
              select === "pending" && "bg-white"
            )}
            onClick={() => {
              setSelect("pending");
            }}
          >
            Pendentes
          </Button>
          <Button
            variant={"ghost"}
            className={clsx(
              "rounded-md px-4 py-2 text-black text-sm cursor-pointer",
              select === "in-progress" && "bg-white"
            )}
            onClick={() => {
              setSelect("in-progress");
            }}
          >
            Em Progresso
          </Button>
          <Button
            variant={"ghost"}
            className={clsx(
              "rounded-md px-4 py-2 text-black text-sm cursor-pointer",
              select === "completed" && "bg-white"
            )}
            onClick={() => {
              setSelect("completed");
            }}
          >
            Concluídos
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

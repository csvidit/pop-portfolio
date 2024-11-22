"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/utils/css/utils";

const NavItem = (props: {
  id: string;
  idx: number;
  label: string;
  color: string;
  url: string;
}) => {
  return (
    <motion.li
      id={props.id}
      className={cn(
        "flex rounded-lg text-neutral-50",
        props.color,
      )}
    >
      <Link href={props.url} className="p-4 w-full h-full flex flex-col justify-between gap-4">
        <span className="text-xs">
          {props.idx < 10 ? "0" + props.idx.toString() : props.idx}
        </span>
        <span>{props.label}</span>
      </Link>
    </motion.li>
  );
};

export default NavItem;

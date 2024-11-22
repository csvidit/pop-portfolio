import { cn } from "@/utils/css/utils";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], display: "swap" });

const MainContainer = (props: { children: React.ReactNode }) => {
  return <body className={cn("p-4 bg-linen-50 flex flex-col lg:flex-row gap-4", geist.className)}>{props.children}</body>;
};

export default MainContainer;

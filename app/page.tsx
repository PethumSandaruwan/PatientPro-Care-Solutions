import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return(
    <div>
      <h1 className="text-3xl text-white underline">Home</h1>
      <Button>Click me</Button>
    </div>
  )
}

import Messaging from "@/components/Messaging";

const data: any[] = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1];

export default function Home() {
  return <Messaging data={data} />;
}

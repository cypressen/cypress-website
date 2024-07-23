import { Badge } from "@/components/ui/badge";

const StatusItem = () => {
  const id: string = "kei";
  const status: string = "admin";
  return (
    <>
      <Badge className="bg-blue-400" variant={"outline"}>
        {id} | {status}
      </Badge>
    </>
  );
};
export default StatusItem;

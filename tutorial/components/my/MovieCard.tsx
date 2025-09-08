import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const MovieCard = () => {
  return (
    <div>
      <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-2">
        <CardContent />

        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

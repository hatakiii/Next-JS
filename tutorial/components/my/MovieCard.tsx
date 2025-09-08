import Image from "next/image";
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
        <CardContent className="p-0">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMDNjMzcxNTEtODRjYi00MGQ4LWE3YjAtNjllYzE1OThmZmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt="Dear Santa"
            width={230}
            height={340}
          />
        </CardContent>

        <CardFooter className="flex flex-col items-start p-2">
          <CardDescription className="flex gap-2">
            <span>6/10</span>
          </CardDescription>
          <CardTitle>Movie Name</CardTitle>
        </CardFooter>
      </Card>
    </div>
  );
};

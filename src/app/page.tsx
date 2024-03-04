import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="h-full grid place-items-center">
      <TooltipProvider>
        <h1 className="text-6xl">
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="hover:text-red-500">data</span>
            </TooltipTrigger>
            <TooltipContent>
              <dl className="font-serif">
                <dt className="font-bold text-xl">data</dt>
                <dd>
                  (collectively, uncountable) Information, especially in a
                  scientific or computational context, or with the implication
                  that it is organized.
                </dd>
                <dd>
                  (computing) A representation of facts or ideas in a formalized
                  manner capable of being communicated or manipulated by some
                  process.
                </dd>
              </dl>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="hover:text-red-500">malky</span>
            </TooltipTrigger>
            <TooltipContent>
              <dl className="font-serif">
                <dt className="font-bold text-xl">malky</dt>
                <dd>(Scottish, slang) To physically assault</dd>
                <dd>(Scottish, slang) To murder</dd>
              </dl>
            </TooltipContent>
          </Tooltip>
        </h1>
      </TooltipProvider>
    </main>
  );
}

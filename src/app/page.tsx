import {
  DefinitionDetails,
  DefinitionList,
  DefinitionTitle,
} from "@/components/definition";
import { HoverWord } from "@/components/hover-word";
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
              <HoverWord>data</HoverWord>
            </TooltipTrigger>
            <TooltipContent>
              <DefinitionList>
                <DefinitionTitle>
                  <strong>data</strong> <em>(n, pl)</em>
                </DefinitionTitle>
                <DefinitionDetails>
                  <em>(collectively, uncountable)</em> Information, especially
                  in a scientific or computational context, or with the
                  implication that it is organized.
                </DefinitionDetails>
                <DefinitionDetails>
                  <em>(computing)</em> A representation of facts or ideas in a
                  formalized manner capable of being communicated or manipulated
                  by some process.
                </DefinitionDetails>
              </DefinitionList>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <HoverWord>malky</HoverWord>
            </TooltipTrigger>
            <TooltipContent>
              <DefinitionList>
                <DefinitionTitle>
                  <strong>malky</strong> <em>(v)</em>
                </DefinitionTitle>
                <DefinitionDetails>
                  <em>(Scottish, slang)</em> To physically assault
                </DefinitionDetails>
                <DefinitionDetails>
                  <em>(Scottish, slang)</em> To murder
                </DefinitionDetails>
              </DefinitionList>
            </TooltipContent>
          </Tooltip>
        </h1>
      </TooltipProvider>
    </main>
  );
}

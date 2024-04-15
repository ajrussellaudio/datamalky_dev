import {
  DefinitionDetails,
  DefinitionList,
  DefinitionTitle,
} from "@/components/definition";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center gap-4">
      <h1 className="mx-auto text-7xl font-sans md:text-9xl">
        <span className="text-white">data</span>
        <span className="text-yellow-300">malky</span>
      </h1>
      <DefinitionList className="mx-auto">
        <DefinitionTitle>
          <strong>data</strong> <em>(n, pl)</em>
        </DefinitionTitle>
        <DefinitionDetails>
          <em>(collectively, uncountable)</em> Information, especially in a
          scientific or computational context, or with the implication that it
          is organized.
        </DefinitionDetails>
        <DefinitionDetails>
          <em>(computing)</em> A representation of facts or ideas in a
          formalized manner capable of being communicated or manipulated by some
          process.
        </DefinitionDetails>
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
    </main>
  );
}

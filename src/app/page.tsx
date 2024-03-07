import {
  DefinitionDetails,
  DefinitionList,
  DefinitionTitle,
} from "@/components/definition";

export default function Home() {
  return (
    <main className="h-full grid place-items-center">
      <h1 className="sr-only">Datamalky</h1>
      <DefinitionList>
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

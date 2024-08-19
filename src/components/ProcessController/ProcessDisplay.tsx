interface ProcessDisplayProps {
  display: string, // probably will become jsx component at some point
}

function ProcessDisplay(props: ProcessDisplayProps) {

  const { display } = props;

  return (
    <>
      <h1>{display}</h1>
    </>
  )
}

export default ProcessDisplay;

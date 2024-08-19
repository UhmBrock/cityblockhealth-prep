import IProcess from "../../processes/IProcess.ts"
import HelloWorldProcess from "../../processes/HelloWorld.ts";
import TempProcess from "../../processes/TempProcess.ts";

interface ProcessListProps {
  setSelectedProcess: (progress: IProcess) => void,
  running: boolean
}

function ProcessList(props: ProcessListProps) {

  const { setSelectedProcess, running } = props;

  //1. Create a list of process classes
  //2. Map over the process classes to create Process React Components
  //  a. These should just display using some static properties on the class
  //3. Upon selecting a process, set a state variable in the parent
  //   to an instance of new ProcessClass()
  //4. Then we can call .Run and .Display from the parent state variable and
  //   update the other variables from there

  const processes: Array<IProcess> = [
    new HelloWorldProcess(),
    new TempProcess()
  ];

  return (
    <>
      {
        processes.map((process) => {
          return (
            <section id={process.name} key={process.name}>
              <h1>{process.name}</h1>
              <button
                disabled={running ? true : false}
                onClick={() => setSelectedProcess(process)}>
                {running ? "Cancel" : "Run"}
              </button>
            </section>
          )
        })
      }
    </>
  )
}

export default ProcessList

import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import ProcessDisplay from "./ProcessDisplay";
import ProcessList from "./ProcessList";
import IProcess from "../../processes/IProcess";

function ProcessController() {

  const [selectedProcess, setSelectedProcess] = useState<IProcess>();
  const [display, setDisplay] = useState({ progress: "0%", display: "Waiting Process Start" });
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (selectedProcess == undefined) {
      return;
    }
    selectedProcess.Run(setDisplay, setRunning);
  }, [selectedProcess]);

  return (
    <>
      <ProgressBar progressPercent={display?.progress || "0%"} />
      <ProcessDisplay display={display?.display || ""} />
      <ProcessList setSelectedProcess={setSelectedProcess} running={running} />
    </>
  );
}

export default ProcessController;

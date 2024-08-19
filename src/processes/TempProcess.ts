
import IProcess from './IProcess.ts';

export default class TempProcess implements IProcess {
  name = "TempProcess";

  async Run(setDisplay: (state: { progress: string, display: string }) => void, setRunning: (state: boolean) => void) {
    console.log("Starting Temp Process");
    setRunning(true);
    setDisplay({ progress: "10%", display: "Temp Process Starting!" });
    await this.delay(5000);
    setDisplay({ progress: "25%", display: "Temp Process Update v1" });
    await this.delay(5000);
    setDisplay({ progress: "50%", display: "Temp Process Update v2" });
    await this.delay(5000);
    setDisplay({ progress: "75%", display: "Temp Process Update v3" });
    await this.delay(5000);
    setDisplay({ progress: "100%", display: "Temp Process Update v4" });
    setRunning(false);
  }

  delay = (ms: number) => new Promise(res => setTimeout(res, ms));
}

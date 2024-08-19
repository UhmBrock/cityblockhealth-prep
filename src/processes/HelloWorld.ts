import IProcess from './IProcess.ts';

export default class HelloWorldProcess implements IProcess {
  name = "HelloWorld";

  async Run(setDisplay: (state: { progress: string, display: string }) => void, setRunning: (state: boolean) => void) {
    setRunning(true);
    setDisplay({ progress: "100%", display: "Hello World Ran!" })
    setRunning(false);
  }
}

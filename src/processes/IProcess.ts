export default interface Process {
  name: string,
  Run: (
    setDisplay: (state: { progress: string, display: string }) => void,
    setRunning: (state: boolean) => void
  ) => void
}

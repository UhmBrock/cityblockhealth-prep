function ProgressBar(props: { progressPercent: string }) {

  return (
    <>
      <h1>ProgressBar</h1>
      <div className="progressbarContainer" style={{ width: '50vw', height: '5vh', backgroundColor: 'white' }}>
        <div className="progressbarContent" style={{ width: props.progressPercent, height: '100%', backgroundColor: 'green' }}></div>
      </div>
    </>
  )
}

export default ProgressBar

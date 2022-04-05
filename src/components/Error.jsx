
export default function Error({ command }) {
  return (
    <div className="command">
      <p>Théo Gaudin@portfolio % {command}</p>
      Command not find, please try again or check the command list with the "help" command.
    </div>
  )
}

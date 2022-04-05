import '../App.css';

export default function Help() {
  return (
    <div className="command">
      <p>Théo Gaudin@portfolio % help</p>
      <p>Voici la liste des commandes disponibles : </p>
      <ul className='commandList'>
        <li><p className='commandTitleHelp'>clear</p><p>Efface la liste des commandes effectuées</p></li>
        <li><p className='commandTitleHelp'>help</p><p>Montre toutes les commandes disponibles</p></li>
        <li><p className='commandTitleHelp'>link</p><p>[github/linkedin]: Montre les liens de mon github ou linkedin</p></li>
        <li><p className='commandTitleHelp'>name</p><p>Accédez à quelques informations sur moi</p></li>
        <li><p className='commandTitleHelp'>source</p><p>Lien du code source</p></li>
      </ul>
    </div>
  )
}

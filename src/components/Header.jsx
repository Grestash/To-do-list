import ToDoIcon from '../assets/icons/to-do-icon.svg'

function Header() {
    return (
      <div className="header">
        <div className="header_container">
        <img src={ToDoIcon} alt="" style={{width: 40, height: 40, paddingBottom: 5}} draggable={false}/>
        <h1>TODO</h1>
        </div>
      </div>
    );
  }

  export default Header;
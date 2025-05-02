import ToDoIcon from '../assets/icons/to-do-icon.svg'

function Header() {
    return (
      <div className="header">
        <div className="header_container">
           <a href="."><img src={ToDoIcon} alt="" style={{width: 40, height: 40, paddingBottom: 9, }} draggable={false}/>
          <h1>TODO</h1></a>
        </div>
      </div>
    );
  }

  export default Header;


function TODOHero({ todos_completed, total_todos }) {

  let statusText = "";

  if (total_todos === 0) {
    statusText = "Nothing to do...";
  } else if (todos_completed === 0) {
    statusText = "It`s time to work!";
  } else if (todos_completed < total_todos) {
    statusText = "Keep it up! ";
  } else {
    statusText = 'All tasks done!'}

    return (
      <section className="todohero_section container">
        <div >
            <p>{statusText}</p>
            
        </div>
        <div className="todohero_circle">
          {todos_completed}/{total_todos}
        </div>
      </section>
    );
  }
  export default TODOHero;
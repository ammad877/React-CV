const root = document.getElementById("root");


function MainComponent() {
  return (
    <div>
      <Resume />
      <Skills />
      <Education />
      <Hobbies />
      <Information />
    </div>
  );
}

ReactDOM.render(<MainComponent />, root);

function Resume() {
  return (
    <div>
      <center>
        <h1>Curriculum Vitae</h1>
      </center>
      <center>
        <h2>Ammadullah</h2>
      </center>
      <hr />
      <h1>Objective:</h1>
      <p>
        "Looking for a challange role <b>in a organisation</b>to utilize my
        technical, development and management skills for the growth of an
        organization as well as to enhance my knowledge about new and emerging
        it trends im the IT program sector.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h1>Skills and Abilities</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>photoshop cs6</li>
          <li>Adobe Illustratot</li>
        </ul>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h1>Education</h1>
        <ul>
          <li>Matric from Prince Public Secondary School.</li>
          <li>C.I.T from Good Shepherd.</li>
          <li>Web Development from JavanPakistan.</li>
        </ul>
    </div>
  );
}

function Hobbies() {
  return (
    <div>
      <h1>Interest and Hobbies</h1>
        <ul>
          <li>Gaming</li>
          <li>Programming</li>
          <li>Hacking</li>
          <li>Photgraphy</li>
        </ul>
    </div>
  );
}

function Information() {
  return (
    <div>
      <h1>Personal Information</h1>
        <ul>
          <li>Religion : Islam</li>
          <li>Nationality :Pakistani</li>
          <li>Date of Birth : 19-12-2000</li>
        </ul>
    </div>
  );
}

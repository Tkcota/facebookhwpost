import "./App.css";
import Card from "./Card";

let users = [
  { id: 1, name: "Bob", about: 'Can\'t wait to go fishing this summer! who\'s in??', userid: '@BoBoRedman' },
  { id: 2, name: "Hunter", about: 'Stoked to go hunting this summer in Utah!', userid: '@HunterTheHunter' },
  { id: 3, name: "Chris", about: 'My name is chris and im chris . Ya', userid: '@ChrisRules891' },
  { id: 3, name: "Zach", about: 'I really hate painting it\'s so boring!', userid: '@ZackAttack3000' },
]

function App() {
  const renderPost = () => {
    return users.map((posts) => {
      return <Card key={posts.id} name={posts.name} about={posts.about} userid={posts.userid} />
    })
  }

  return (
    <>
      <h1 className="title">Facebook Posts!</h1>
      <body>{renderPost()}</body>
      {/* <JSXDemo /> */}
    </>
  );
}

export default App;
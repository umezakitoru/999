import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "じゃけえ",
  email: "123@aaa.com",
  address: "suita"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}

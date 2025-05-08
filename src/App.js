import "./styles.css";
import { FileExplorer } from "./components/FileExplorer";
import data from "./data.json";

export default function App() {
  return (
    <div className="App">
      <FileExplorer folderData={data} />
    </div>
  );
}

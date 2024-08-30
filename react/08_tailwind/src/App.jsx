import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import NewContainer from "./components/NewContainer";

function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="sm:flex sm:gap-6 mb-12">
        <MainArticle />
        <NewContainer />
      </div>
      <CardContainer />
    </main>
  );
}

export default App;

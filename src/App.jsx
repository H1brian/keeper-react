import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import notes from "./notes.js";

const App = () => {
    return <main>
    <Header />
    {notes.map( noteEntry => <Note 
        key={noteEntry.key}
        title={noteEntry.title}
        description={noteEntry.content}
    />)}
    <Footer />
    </main>
};
export default App;
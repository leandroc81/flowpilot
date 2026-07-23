import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import StatCard from "./components/dashboard/StatCard";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <header>
          <h2>Bienvenido a FlowPilot</h2>
          <p>El copiloto inteligente de tu negocio.</p>
        </header>

        <section className="cards">
          <StatCard
            title="Ingresos"
            value="$250.000"
            color="green"
          />

          <StatCard
            title="Gastos"
            value="$95.000"
            color="red"
          />

          <StatCard
            title="Balance"
            value="$155.000"
            color="#2563eb"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
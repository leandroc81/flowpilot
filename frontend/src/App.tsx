function App() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Encabezado */}
      <header className="bg-slate-900 text-white px-8 py-5 shadow-lg flex justify-between items-center">

        <h1 className="text-3xl font-bold text-blue-400">
          🚀 FlowPilot
        </h1>

        <span className="text-slate-300">
          Tu copiloto financiero
        </span>

      </header>

      <div className="flex">

        {/* Menú lateral */}

        <aside className="w-64 bg-slate-800 text-white min-h-screen p-6">

          <h2 className="text-xl font-semibold mb-8">
            Menú
          </h2>

          <ul className="space-y-4">

            <li>📊 Dashboard</li>
            <li>💰 Ingresos</li>
            <li>💳 Gastos</li>
            <li>📅 Calendario</li>
            <li>📈 Reportes</li>
            <li>⚙ Configuración</li>

          </ul>

        </aside>

        {/* Contenido */}

        <main className="flex-1 p-8">

          <h2 className="text-3xl font-bold mb-8">
            Dashboard
          </h2>

          <div className="grid grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow-lg p-6">

              <p className="text-gray-500">
                Objetivo Diario
              </p>

              <h3 className="text-3xl font-bold text-green-600">
                $18.500
              </h3>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

              <p className="text-gray-500">
                Caja Disponible
              </p>

              <h3 className="text-3xl font-bold text-blue-600">
                $52.300
              </h3>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

              <p className="text-gray-500">
                Facturado Hoy
              </p>

              <h3 className="text-3xl font-bold text-orange-500">
                $8.450
              </h3>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;
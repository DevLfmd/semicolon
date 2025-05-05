export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
        }
        .min-h-screen {
          min-height: 100vh;
        }
        .flex {
          display: flex;
        }
        .items-center {
          align-items: center;
        }
        .justify-center {
          justify-content: center;
        }
        .text-center {
          text-align: center;
        }
        .bg-gray-100 {
          background-color: #f3f4f6;
        }
        .text-6xl {
          font-size: 3.75rem;
          line-height: 1;
        }
        .font-bold {
          font-weight: 700;
        }
        .text-gray-900 {
          color: #111827;
        }
        .mb-4 {
          margin-bottom: 1rem;
        }
        .text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .text-gray-600 {
          color: #4b5563;
        }
        .mb-8 {
          margin-bottom: 2rem;
        }
        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
        .bg-blue-600 {
          background-color: #2563eb;
        }
        .text-white {
          color: #ffffff;
        }
        .rounded-lg {
          border-radius: 0.5rem;
        }
        .hover\\:bg-blue-700:hover {
          background-color: #1d4ed8;
        }
        .transition-colors {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
      `}} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
          <a
            href="/semicolon/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </>
  )
} 
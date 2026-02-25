export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Milestone. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="hover:text-brand-cobalt"
            href="mailto:contato@milestone.app"
          >
            contato@milestone.app
          </a>
          <a className="hover:text-brand-cobalt" href="#">
            Termos
          </a>
          <a className="hover:text-brand-cobalt" href="#">
            Privacidade
          </a>
        </div>
      </div>
      <div className="container mt-4 text-xs text-slate-500">
        Dados criptografados e usados apenas para o piloto.
      </div>
    </footer>
  );
}

import LoginForm from "../../../components/form/forms/LoginForm";

export default function Login() {
  return (
    <div 
      className="absolute w-full h-full flex justify-center items-center"
    >
      <div className="bg-white rounded-2xl p-8 space-y-8 shadow-2xl shadow-black/30">
        <div className="space-y-2">
          <div className="flex justify-end items-center">
            <a
              href="/admin/loginAdmin"
              className="text-xs font-semibold px-4 py-1 bg-slate-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-slate-600 duration-300"
            >
              Admin - Follow Up
            </a>
          </div>
          <div className="w-full text-center">
            <span className="font-bold text-4xl">
              Bem vindo(a) a Escola
            </span>
            <p className="text-neutral-400">
              Faça login para acessar o sistema da escola
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
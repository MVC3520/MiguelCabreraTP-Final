import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    alert(`Bienvenido ${data.email}`);
  };

  return (
    <main className="container">
      <section className="login-card">
        <h2>Ingreso de usuario</h2>

        <p className="login-text">
          Complete los datos para acceder al sistema.
        </p>

        <form
          className="login-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group">
            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="usuario@email.com"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Ingrese un correo válido",
                },
              })}
            />

            {errors.email && (
              <span className="error">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Mínimo 6 caracteres"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message:
                    "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />

            {errors.password && (
              <span className="error">
                {errors.password.message}
              </span>
            )}
          </div>

          <button type="submit">
            Ingresar
          </button>
        </form>
      </section>
    </main>
  );
}
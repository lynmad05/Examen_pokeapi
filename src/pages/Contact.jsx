import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return alert("Todos los campos son obligatorios");
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Contacto</h1>
      {success && <div className="alert alert-success">Mensaje enviado correctamente</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
}
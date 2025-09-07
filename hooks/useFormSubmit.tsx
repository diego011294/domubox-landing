import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface UseFormSubmitProps {
  endpoint: string; // ej: "/api/contact"
  cooldown?: number; // ms entre envíos (default 2 min)
}

export function useFormSubmit({ endpoint, cooldown = 2 * 60 * 1000 }: UseFormSubmitProps) {
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !phone || !email || !message) {
      setStatusMessage("❌ Todos los campos son obligatorios");
      return;
    }
    if (!validateEmail(email)) {
      setStatusMessage("❌ Ingresa un email válido");
      return;
    }

    // Limitar envíos usando localStorage
    const lastSent = localStorage.getItem(endpoint);
    const now = Date.now();
    if (lastSent && now - parseInt(lastSent) < cooldown) {
      setStatusMessage("⏳ Espera un momento antes de enviar otro mensaje.");
      return;
    }

    try {
      setSending(true);
      setStatusMessage(null);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatusMessage("✅ Tu consulta se envió correctamente");
        form.reset();
        localStorage.setItem(endpoint, now.toString());
      } else {
        setStatusMessage(`❌ Error: ${result.message || "No se pudo enviar el mensaje"}`);
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("❌ Hubo un error, inténtalo de nuevo");
    } finally {
      setSending(false);
    }
  };

  return { handleSubmit, sending, statusMessage };
}

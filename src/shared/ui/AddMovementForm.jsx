// src/shared/ui/AddMovementForm.js
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

export function AddMovementForm({ open, onClose, onSubmit, className = "" }) {
  const [name, setName] = useState("");

  if (!open) return null;

  function handleSubmit() {
    if (!name.trim()) return;
    onSubmit({ name });
    setName("");
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose} title="Add Movement" className={className}>
      <input
        type="text"
        className="w-full p-2 border rounded-lg mb-4"
        placeholder="Movement name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={handleSubmit} fullWidth>
        Add
      </Button>
    </Modal>
  );
}

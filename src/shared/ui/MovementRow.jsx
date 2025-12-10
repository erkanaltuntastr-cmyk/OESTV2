// src/shared/ui/MovementRow.js
import Card from "./Card";

export function MovementRow({ movement, onUpdate, onRemove, className = "" }) {
  return (
    <Card className={className}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">{movement.name}</h3>
        <button
          onClick={() => onRemove(movement.id)}
          className="text-red-500 font-bold text-xs"
        >
          Remove
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
        <input
          type="number"
          value={movement.sets}
          onChange={(e) =>
            onUpdate(movement.id, { sets: Number(e.target.value) })
          }
          className="border p-2 rounded-lg"
          placeholder="Sets"
        />
        <input
          type="number"
          value={movement.reps}
          onChange={(e) =>
            onUpdate(movement.id, { reps: Number(e.target.value) })
          }
          className="border p-2 rounded-lg"
          placeholder="Reps"
        />
        <input
          type="number"
          value={movement.weight}
          onChange={(e) =>
            onUpdate(movement.id, { weight: Number(e.target.value) })
          }
          className="border p-2 rounded-lg"
          placeholder="Kg"
        />
      </div>
    </Card>
  );
}

import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, valeurParDefaut = null) {
  const [valeur, setValeur] = useState(() => {
    try {
      const sauvegarde = localStorage.getItem(key);

      if (sauvegarde !== null) {
        return JSON.parse(sauvegarde);
      }

      return valeurParDefaut;
    } catch {
      return valeurParDefaut;
    }
  });

  useEffect(() => {
    const valeurJSON = JSON.stringify(valeur);
    localStorage.setItem(key, valeurJSON);
  }, [key, valeur]);

  return [valeur, setValeur];
}

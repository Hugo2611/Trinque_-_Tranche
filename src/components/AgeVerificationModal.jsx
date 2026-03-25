import { useEffect, useState } from 'react';

const STORAGE_KEY = 'terroire_age_verified';

function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDenied, setIsDenied] = useState(false);

  useEffect(() => {
    // Au chargement: on vérifie si l'utilisateur a déjà validé l'âge.
    const hasVerified = localStorage.getItem(STORAGE_KEY) === 'true';
    setIsOpen(!hasVerified);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsOpen(false);
    setIsDenied(false);
  };

  const handleDecline = () => {
    setIsDenied(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-amber-200 bg-[#fffaf1] p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-stone-900">Bienvenue chez Trinque &amp; Tranche</h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-700">
          Pour entrer dans notre cave, confirmez-nous que vous avez l&apos;âge légal
          de trinquer.
        </p>

        {isDenied ? (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            Pas encore ! Revenez nous voir dès que vous aurez l&apos;âge légal.
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
          >
            Pas encore !
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-lg bg-bordeaux-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-bordeaux-700"
          >
            J&apos;ai plus de 18 ans
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgeVerificationModal;

import Image from "next/image";
import pitti from "@/public/images/Pitti.jpg";

export default function AboutUs() {
  return (
    <main className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl  mb-6 text-center">La Locanda </h1>

      <div className="w-full mb-8">
        <Image
          src={pitti}
          alt="Piazza Pitti antica"
          className="rounded-xl shadow-md w-full h-auto object-cover"
          priority
        />
        <p className="text-sm text-gray-600 mt-2 italic text-center">
          Una immagine storica di Piazza Pitti — il luogo che ha ispirato la
          nostra identità.
        </p>
      </div>

      <p className="mb-6 leading-relaxed text-lg">
        La Locanda nasce nel cuore di Firenze, davanti a Piazza Pitti, con una
        missione chiara: custodire la tradizione toscana e servirla con
        rispetto, attenzione e orgoglio. Siamo un ristorante che mette al centro
        la qualità, la semplicità e l’autenticità, senza compromessi.
      </p>

      <p className="mb-6 leading-relaxed text-lg">
        Il nostro team lavora ogni giorno per trasformare ingredienti freschi e
        locali in piatti che parlano del territorio. La nostra cucina non è una
        reinterpretazione moderna: è un omaggio diretto alle ricette storiche,
        ai sapori veri e ai piccoli gesti che rendono un piatto memorabile.
      </p>

      <p className="mb-6 leading-relaxed text-lg">
        La collaborazione con produttori artigianali toscani è uno dei pilastri
        del nostro lavoro. Che si tratti del vino, dell’olio, della carne o
        delle verdure di stagione, ogni prodotto è scelto per la sua storia e
        per la passione delle persone che lo creano.
      </p>

      <p className="mb-6 leading-relaxed text-lg">
        La Locanda è pensata per chi ama la buona cucina ma anche i luoghi che
        raccontano qualcosa. Le mura, il profumo, la vista su Piazza Pitti e
        l’ospitalità familiare rendono l’esperienza unica e riconoscibile. Per
        molti clienti siamo diventati una tappa fissa, e questo per noi vale più
        di qualsiasi premio.
      </p>

      <p className="mb-6 leading-relaxed text-lg">
        Crediamo nella cucina genuina, nei piatti fatti con calma, nella
        convivialità toscana e nella bellezza semplice delle cose vere. Ogni
        giorno cerchiamo di migliorare, senza perdere lo spirito con cui tutto è
        iniziato.
      </p>

      <p className="leading-relaxed text-lg font-semibold">
        Benvenuti alla Locanda. Qui Firenze si assapora davvero.
      </p>
    </main>
  );
}

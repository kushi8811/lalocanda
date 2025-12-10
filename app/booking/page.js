"use client";

export default function BookTablePage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Prenota un Tavolo
        </h1>

        <form
          action="https://formsubmit.co/locandapitti.info@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Hidden fields for FormSubmit */}
          <input type="hidden" name="_subject" value="Prenotazione Nuova" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Ciao! Grazie per aver prenotato a La Locanda. Ti aspettiamo!"
          />
          <input
            type="hidden"
            name="_next"
            value="https://www.lalocandadeipitti.com/thanks"
          />
          <input type="hidden" name="_template" value="table" />

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-red-500 focus:border-red-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-red-500 focus:border-red-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-red-500 focus:border-red-500"
              placeholder="+39 333 123 4567"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-red-500 focus:border-red-500"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                required
                step="900"
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Guests
            </label>
            <input
              type="number"
              name="guests"
              min="1"
              max="20"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-semibold hover:bg-accent-700 transition"
          >
            Conferma Prenotazione
          </button>
        </form>
      </div>
    </section>
  );
}

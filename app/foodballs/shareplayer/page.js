import ImagePicker from "@/components/ImagePicker";
import { sharePlayer } from "@/lib/actions";

export default function ShareMealPage() {
  return (
    <>
      <header className="text-center py-8 shadow-md">
        <h1 className="text-3xl font-bold text-blue-300">
          Share your{" "}
          <span className="text-orange-500">favorite player</span>
        </h1>
        <p className="mt-2 text-white">
          Or any other player you feel needs sharing!
        </p>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <form
          className="bg-white shadow-lg rounded-xl p-6 space-y-6"
          action={sharePlayer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="flex flex-col space-y-2">
              <label htmlFor="name" className="font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </p>
            <p className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </p>
          </div>

          <p className="flex flex-col space-y-2">
            <label htmlFor="title" className="font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </p>

          <p className="flex flex-col space-y-2">
            <label htmlFor="summary" className="font-medium text-gray-700">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </p>

          <p className="flex flex-col space-y-2">
            <label htmlFor="instructions" className="font-medium text-gray-700">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </p>

          <div className="text-gray-500 italic">
            <ImagePicker label="Player Image" name="image" />
          </div>

          <p className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r cursor-pointer from-green-500 to-yellow-400 text-white px-6 py-2 rounded-lg font-bold hover:from-green-600 hover:to-yellow-500 transition-all duration-300"
            >
              Share Player
            </button>
          </p>
        </form>
      </main>
    </>
  );
}

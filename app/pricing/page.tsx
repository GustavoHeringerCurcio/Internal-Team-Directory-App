import Header from "../components/navbar/Header";

export default function Pricing() {
  return (
    <>
    <Header></Header>
    <main className="flex flex-col items-center mt-10">
      <section className="flex flex-col items-center gap-4 max-w-2xl px-5">
        <h1 className="font-bold text-5xl">Pricing Plans</h1>
        <p className="text-lg text-gray-600 text-center">
          Choose the ideal plan for your team.
        </p>
      </section>
    </main>
    </>
  );
}
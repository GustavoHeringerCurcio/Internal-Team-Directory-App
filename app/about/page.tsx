import Header from "../components/navbar/Header";

export default function About() {
  return (
    <>
    <Header></Header>
    <main className="flex flex-col items-center mt-10">
      <section className="flex flex-col items-center gap-4 max-w-2xl px-5">
        <h1 className="font-bold text-5xl">About Us</h1>
        <p className="text-lg text-gray-600 text-center">
          TeamForce is a platform for managing your team members efficiently and effectively.
        </p>
      </section>
    </main>
    </>
  );
}
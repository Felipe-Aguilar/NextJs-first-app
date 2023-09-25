import Navbar from "@/components/navbar/Navbar";

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <h1>Hola mundo</h1>
        {children}
      </main>
    </>
  );
}
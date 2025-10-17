export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-red-500">This is the user route</h1>
      {children}
    </div>
  );
}

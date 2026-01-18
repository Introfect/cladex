import Navbar from "@/components/Navbar";

export default function RandomPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Random Page</h1>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            This is a random placeholder page with some content.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Placeholder 1</h3>
              <p className="text-sm text-muted-foreground">Some random content here</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Placeholder 2</h3>
              <p className="text-sm text-muted-foreground">More placeholder stuff</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Placeholder 3</h3>
              <p className="text-sm text-muted-foreground">Even more content</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

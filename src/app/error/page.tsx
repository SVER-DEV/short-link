export default function error() {
  return (
    <main className="flex min-h-screen flex-col grid-cols-1 p-12 space-y-10">
      <section>
        <h1 className="mt-96 text-6xl">404 Not Found</h1>
        <h1 className="text-3xl text-gray-500">
          🐈고양이가 페이지를 물어갔나 봐요. 페이지가 존재하지 않습니다.
        </h1>
        <h1 className="mt-10 text-3xl text-gray-600">
          5초 뒤 메인 페이지로 이동합니다.
        </h1>
        <meta
          httpEquiv="refresh"
          content="5; url=http://localhost:3000/"
        ></meta>
      </section>
    </main>
  );
}

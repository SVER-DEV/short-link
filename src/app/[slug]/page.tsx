const linkController = require("../../../db/linkInfo");

const testpage = async ({ params }: { params: { slug: string } }) => {
  const shortid = params.slug;
  const finddocument = await linkController.findOne({ shortUrl: shortid });

  if (finddocument == null || undefined) {
    return (
      <div>
        <meta
          httpEquiv="refresh"
          content="0; url=http://localhost:3000/error"
        ></meta>
      </div>
    );
  }
  return (
    <div>
      <meta httpEquiv="refresh" content={"0;" + finddocument["originalUrl"]} />
    </div>
  );
};

export default testpage;

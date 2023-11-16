import Image from "next/image";

const linkController = require("../../../../db/linkInfo");
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
  } else {
    return (
      <main className="flex min-h-screen flex-col grid-cols-1 p-12 space-y-10">
        <section>
          <h1 className="text-6xl font-bold">서비스명</h1>
          <h2 className="mt-4 text-2xl">
            외우기 쉽고 간단한 <br />
            단축 주소 서비스 ✨
          </h2>
          <div className="mb-8"></div>
        </section>
        <section>
          <h2 className="my-2 text-2xl flex">
            <svg
              className="mr-2"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18.25C14.5858 18.25 14.25 18.5858 14.25 19C14.25 19.4142 14.5858 19.75 15 19.75V18.25ZM19.75 14C19.75 13.5858 19.4142 13.25 19 13.25C18.5858 13.25 18.25 13.5858 18.25 14H19.75ZM9 19.75C9.41421 19.75 9.75 19.4142 9.75 19C9.75 18.5858 9.41421 18.25 9 18.25V19.75ZM5.75 14C5.75 13.5858 5.41421 13.25 5 13.25C4.58579 13.25 4.25 13.5858 4.25 14H5.75ZM9 5.75C9.41421 5.75 9.75 5.41421 9.75 5C9.75 4.58579 9.41421 4.25 9 4.25V5.75ZM4.25 10C4.25 10.4142 4.58579 10.75 5 10.75C5.41421 10.75 5.75 10.4142 5.75 10H4.25ZM15 4.25C14.5858 4.25 14.25 4.58579 14.25 5C14.25 5.41421 14.5858 5.75 15 5.75L15 4.25ZM18.25 10C18.25 10.4142 18.5858 10.75 19 10.75C19.4142 10.75 19.75 10.4142 19.75 10L18.25 10ZM15 19.75C17.6234 19.75 19.75 17.6234 19.75 15H18.25C18.25 16.7949 16.7949 18.25 15 18.25V19.75ZM19.75 15V14H18.25V15H19.75ZM9 18.25C7.20507 18.25 5.75 16.7949 5.75 15H4.25C4.25 17.6234 6.37665 19.75 9 19.75V18.25ZM5.75 15V14H4.25V15H5.75ZM9 4.25C6.37665 4.25 4.25 6.37665 4.25 9H5.75C5.75 7.20507 7.20507 5.75 9 5.75V4.25ZM4.25 9V10H5.75V9H4.25ZM15 5.75C16.7949 5.75 18.25 7.20507 18.25 9L19.75 9C19.75 6.37665 17.6234 4.25 15 4.25L15 5.75ZM18.25 9V10L19.75 10V9L18.25 9Z"
                fill="#000000"
              />
              <path
                d="M17 12H7"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            QR 코드
          </h2>
          <Image
            className="m-2"
            width="100"
            height="100"
            alt="QR"
            src={
              "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
              "http://localhost:3000/" +
              params.slug
            }
          />
        </section>
        <section>
          <h2 className="my-5 text-2xl flex">
            <svg
              className="mr-2"
              width="25"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            링크 정보
          </h2>
          <li className="m-2">
            요청 IP: {finddocument["requestClient"][0]["clientIp"]}
          </li>
          <li className="m-2">기존 주소: {finddocument["originalUrl"]}</li>
          <li className="m-2">
            요청 시각: {String(finddocument["createdAt"])}
          </li>
        </section>
        <section>
          <h1 className="mt-5 font-bold">
            © 2023 SVER-DEV. All rights reserved.
          </h1>
          <h1 className="my-1 text-gray-500 text-sm">
            본 서비스의 운영자인 SVER-DEV는 이용자가 본 서비스를 이용하여 발생한
            어떠한 법적, 금전적, 정신적, 기타 어떠한 유무형의 피해에 대한 책임을
            가지지 않습니다.
          </h1>
          <h1 className="my-1 text-gray-500 text-sm">
            국내법을 위반하는 행위가 발견될 경우, SVER-DEV는 즉시 관계 기관에
            관련 사항을 통보하고 수사에 적극 협조합니다.
          </h1>
        </section>
      </main>
    );
  }
};

export default testpage;

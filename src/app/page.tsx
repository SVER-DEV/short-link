import { Shorterbutton } from "../../components/shorter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col grid-cols-1 p-12 space-y-10">
      <section>
        <h1 className="text-6xl font-bold">서비스명</h1>
        <h2 className="mt-4 text-2xl">
          외우기 쉽고 간단한 <br />
          단축 주소 서비스 ✨
        </h2>
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
              d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z"
              fill="#1C274C"
            />
            <path
              d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
              fill="#1C274C"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"
              fill="#1C274C"
            />
          </svg>
          이용 약관
        </h2>
        <li className="m-2">
          서비스 이용 약관에 의거 해 금지된 사이트는 등록이 불가능합니다.
        </li>
        <li className="m-2">
          운영자의 판단 하에 서비스 할 수 없는 사이트는 무통보 삭제될 수
          있습니다.
        </li>
        <li className="m-2">
          단축된 주소 뒤에 더하기 /info 를 붙여 링크의 상세 정보를 확인할 수
          있습니다.
        </li>
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
          링크 단축하기
        </h2>
        <Shorterbutton />
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
          국내법을 위반하는 행위가 발견될 경우, SVER-DEV는 즉시 관계 기관에 관련
          사항을 통보하고 수사에 적극 협조합니다.
        </h1>
      </section>
    </main>
  );
}

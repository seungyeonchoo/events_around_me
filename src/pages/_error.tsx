import { NextPage, NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <section className="relative h-[80vh] text-[5rem] font-bold text-primary flex items-center justify-center sm:w-full md:w-full sm:items-center md:items-center lg:px-[10%] sm:py-0 md:py-0 pb-[5%]">
      {statusCode} - 문제가 발생했습니다.
    </section>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

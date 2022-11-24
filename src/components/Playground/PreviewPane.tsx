const PreviewPane = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className=" border-b [&_h1]:text-2xl [&_h1]:font-bold p-8 [&_h1]:mb-8 bg-gray-100">
    <h1>{title}</h1>
    <div className="flex-row flex-wrap items-start flex">{children}</div>
  </div>
);

export const Col = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="w-80 p-8">
    <h2 className="font-bold border-b mb-5">{title}</h2>
    <div className="flex flex-col items-start space-y-3">{children}</div>
  </div>
);

export default PreviewPane;

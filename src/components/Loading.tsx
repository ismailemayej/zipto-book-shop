import img from "../../public/load-time.gif";
const Loading = () => {
  // Loading icn
  return (
    <div className="flex justify-center items-center">
      <img className="text-center size-36" src={img} />;
    </div>
  );
};
export default Loading;

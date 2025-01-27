

const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-16 h-16 border-[7px] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
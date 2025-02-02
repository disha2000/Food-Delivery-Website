const Shimmer = () => {
  return (
    <div className="shimmer__container">
      {Array.from({ length: 12 }, (_, i) => {
        return <div key={i} className="shimmar__card"></div>;
      })}
    </div>
  );
};

export default Shimmer;

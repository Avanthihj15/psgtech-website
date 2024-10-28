import Marquee from "react-fast-marquee";

const News = () => {
  return (
    <div className="flex space-x-1 flex-1">
      <div></div>
      <p style={{fontWeight: 600, fontSize: '12px'}}>News:</p>
      <Marquee className="text-secondary">
        <div className="mx-3" style={{fontWeight: 600, fontSize: '13px'}}>
          Award Ceremony of UG & PG Engineering Programmes
        </div>
        <div className="mx-3" style={{fontWeight: 600, fontSize: '13px'}}>Bsc Msc Programms Admission open 2024</div>
        <div className="mx-4" style={{fontWeight: 600, fontSize: '13px'}}>Bsc Msc Programms Admission open 2024</div>
      </Marquee>
    </div>
  );
};

export default News;

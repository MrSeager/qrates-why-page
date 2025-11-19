export default function SectionSix() {
  return (
    <div className="marquee-wrapper flex py-[50px]">
      {/* First copy */}
      <div className="marquee-content pe-[150px] flex gap-[150px]">
        <h4 className="uppercase font-semibold"><span className="underline">Chilled cow</span> is on qrates</h4>
        <h4 className="uppercase font-semibold"><span className="underline">Sol</span> is on qrates</h4>
        <h4 className="uppercase font-semibold"><span className="underline">Vulfpeck</span> is on qrates</h4>
        <h4 className="uppercase font-semibold"><span className="underline">Chillhop</span> is on qrates</h4>
      </div>

      {/* Second copy (immediately follows the first) */}
      <div className="marquee-content pe-[150px] flex gap-[150px]">
        <h4 className="uppercase font-semibold"><span className="underline">Chilled cow</span> is on qrates</h4>
        <h4 className="uppercase font-semibold"><span className="underline">Sol</span> is on qrates</h4>
        <h4 className="uppercase font-semibold"><span className="underline">Vulfpeck</span> is on qrates</h4>
        <h4 className="uppercase font-semibold"><span className="underline">Chillhop</span> is on qrates</h4>
      </div>
    </div>
  );
}

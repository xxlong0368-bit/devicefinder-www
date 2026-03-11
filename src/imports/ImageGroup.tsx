import imgObject from "figma:asset/a6e3345cd45e404589b7bc418717209251fdcb62.png";

export default function ImageGroup() {
  return (
    <div className="relative size-full" data-name="Image Group">
      <div className="absolute left-0 rounded-[28px] size-[96px] top-0" data-name="Object">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28px]">
          <img alt="" className="absolute h-[99.9%] left-0 max-w-none top-0 w-[99.94%]" src={imgObject} />
        </div>
      </div>
    </div>
  );
}
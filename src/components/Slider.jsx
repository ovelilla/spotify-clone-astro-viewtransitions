import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

export const Slider = React.forwardRef((props, ref) => {
  return (
    <SliderPrimitive.Root
      {...props}
      ref={ref}
      className="relative flex items-center select-none touch-none w-full group"
    >
      <SliderPrimitive.Track className="relative h-1 grow rounded-full bg-[#4d4d4d]">
        <SliderPrimitive.Range className="absolute h-full bg-white group-hover:bg-[#1db954] rounded-full" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 bg-white rounded-full focus:outline-none" />
    </SliderPrimitive.Root>
  );
});

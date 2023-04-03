import { forwardRef } from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';

import cn from 'lib/analytics/classnames';

const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, defaultValue, onValueChange, value, min, max, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn({
        'relative flex w-full touch-none select-none items-center': true,
        [className]: !!className,
      })}
      onValueChange={(v) => {
        if (onValueChange) onValueChange(v);
      }}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={10}
      aria-label="carbon price"
      {...props}
    >
      <SliderPrimitive.Track
        className={cn({
          'relative h-[8px] grow rounded-full bg-cobalt-3 after:bg-cobalt-3': true,
        })}
      >
        <SliderPrimitive.Range
          className={cn({
            'absolute h-full rounded-full bg-white after:bg-cobalt-3': true,
          })}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb asChild>
        <span className="z-50 block h-4 w-4 rounded-full border-2 border-cobalt-0 bg-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <span className="text-xxs absolute top-full left-1/2 -translate-x-1/2 text-white">
            ${value}
          </span>
        </span>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;

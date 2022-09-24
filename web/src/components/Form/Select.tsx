import * as SelectPrimitive from "@radix-ui/react-Select";

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon />
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton />
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item value="adasd">
              <SelectPrimitive.ItemText />
              <SelectPrimitive.ItemIndicator />
            </SelectPrimitive.Item>

            <SelectPrimitive.Separator />
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

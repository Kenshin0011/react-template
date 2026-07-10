import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { css } from "../../../styled-system/css";

export interface AccordionItem {
  value: string;
  title: string;
  content: React.ReactNode;
}

interface Props {
  items: AccordionItem[];
  defaultValue?: string[];
}

export function Accordion({ items, defaultValue }: Props) {
  return (
    <ArkAccordion.Root
      collapsible
      defaultValue={defaultValue}
      className={css({
        width: "full",
      })}
    >
      {items.map((item) => (
        <ArkAccordion.Item
          key={item.value}
          value={item.value}
          className={css({
            marginX: 5,
            marginBottom: 3,

            border: "1px solid",
            borderColor: "gray.200",

            borderRadius: "18px",

            overflow: "hidden",

            transition: "all .25s",

            '&[data-state="open"]': {
              borderColor: "violet.300",
              boxShadow: "0 8px 24px rgba(124,58,237,.12)",
            },
          })}
        >
          <ArkAccordion.ItemTrigger
            className={css({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              w: "full",

              px: 6,
              py: 5,

              cursor: "pointer",

              fontSize: "lg",
              fontWeight: "600",

              transition: ".2s",

              "&:hover": {
                bg: "gray.50",
              },

              "&:focus-visible": {
                outline: "2px solid #8b5cf6",
                outlineOffset: "-2px",
              },
            })}
          >
            {item.title}

            <ArkAccordion.ItemIndicator
              className={css({
                transition: "transform .25s",

                '&[data-state="open"]': {
                  transform: "rotate(90deg)",
                },
              })}
            >
              ›
            </ArkAccordion.ItemIndicator>
          </ArkAccordion.ItemTrigger>

          <ArkAccordion.ItemContent
            className={css({
              px: 6,
              pb: 6,

              color: "gray.600",

              lineHeight: "1.8",

              fontSize: "15px",
            })}
          >
            {item.content}
          </ArkAccordion.ItemContent>
        </ArkAccordion.Item>
      ))}
    </ArkAccordion.Root>
  );
}
